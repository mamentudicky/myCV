import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Education = () => {
  const [education, setEducation] = useState({});
  const [content1, setContent1] = useState({});
  const [content2, setContent2] = useState({});
  const [content3, setContent3] = useState({});
  const [content4, setcontent4] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const educationRef = ref(db, "education/content");

    onValue(educationRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setEducation(data);
        if (data.content1) {
          setContent1(data.content1);
        }
        if (data.content2) {
          setContent2(data.content2);
        }
        if (data.content3) {
          setContent3(data.content3);
        }
        if (data.content4) {
          setcontent4(data.content4);
        }
      }
    });
  }, []);

  return (
    <section id="education" className="cv-section">
      <h2 className="section-title">{education.title}</h2>
      <ul>
        <li>
          <strong>{content1.title}</strong> (2022 - sekarang)
          <p>{content1.subTitle}</p>
        </li>
        <li>
          <strong>{content2.title}</strong> (2019 - 2022)
          <p>{content2.subTitle}</p>
        </li>
        <li>
          <strong>{content3.title}</strong> (2016 - 2019)
          <p></p>
        </li>
        <li>
          <strong>{content4.title}</strong> (2010 - 2016)
          <p></p>
        </li>
      </ul>
    </section>
  );
};

export default Education;
