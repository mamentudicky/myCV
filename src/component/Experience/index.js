import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Experience = () => {
  const [experience, setExperience] = useState({});
  const [content1, setContent1] = useState({});
  const [content2, setContent2] = useState({});
  const [content3, setContent3] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const experienceRef = ref(db, "experience/content/");

    onValue(experienceRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setExperience(data);
        if (data.content1) {
          setContent1(data.content1);
        }
        if (data.content2) {
          setContent2(data.content2);
        }
        if (data.content3) {
          setContent3(data.content3);
        }
      }
    });
  }, []);

  return (
    <section id="experience" className="cv-section">
      <h2 className="section-title">{experience.title}</h2>
      <ul>
        <li>
          <strong>{content1.title}</strong> - (2024)
          <p>{content1.subTitle}</p>
        </li>
        <li>
          <strong>{content2.title}</strong> - (2024)
          <p>{content2.subTitle}</p>
        </li>
        <li>
          <strong>{content3.title}</strong> - (2024)
          <p>{content2.subTitle}</p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
