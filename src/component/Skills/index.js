import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState({});
  const [content, setContent] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const skillRef = ref(db, "skills");

    onValue(skillRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setSkills(data);
        if (data.content) {
          setContent(data.content);
        }
      }
    });
  }, []);

  return (
    <section id="skills" className="cv-section">
      <h2 className="section-title">{skills.title}</h2>
      <ul className="skills-list">
        <li className="skill-item">{content.skill1}</li>
        <li className="skill-item">{content.skill2}</li>
        <li className="skill-item">{content.skill3}</li>
      </ul>
    </section>
  );
};

export default Skills;
