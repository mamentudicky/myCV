import React, { useEffect, useState } from 'react';
import { db, storage } from '../../firebase';

function CV() {
  const [cvData, setCvData] = useState(null);
  const [profileImageUrl, setProfileImageUrl] = useState('');

  useEffect(() => {
    // Ambil data CV dari Firestore
    const fetchData = async () => {
      const doc = await db.collection('cv').doc('your-doc-id').get();
      if (doc.exists) {
        setCvData(doc.data());
        
        // Ambil URL gambar profil dari Firebase Storage
        const imageUrl = await storage.ref(doc.data().profileImagePath).getDownloadURL();
        setProfileImageUrl(imageUrl);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {cvData ? (
        <div>
          <h2>{cvData.name}</h2>
          <img src={profileImageUrl} alt="Profile" width="150" height="150" />
          <p>{cvData.contact}</p>
          <h3>Pengalaman Kerja</h3>
          <ul>
            {cvData.experience.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Memuat...</p>
      )}
    </div>
  );
}

export default CV;
