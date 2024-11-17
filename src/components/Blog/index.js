const Skill = () => {
  const skills = [
    { name: "HTML", level: 95, color: "bg-primary" },
    { name: "CSS", level: 85, color: "bg-warning" },
    { name: "PHP", level: 90, color: "bg-danger" },
    { name: "Javascript", level: 90, color: "bg-danger" },
    { name: "Angular JS", level: 95, color: "bg-dark" },
    { name: "Wordpress", level: 85, color: "bg-info" },
  ];

  return (
    <div className="container-fluid py-5" id="skill">
      <div className="container">
        <h1 className="text-center text-primary mb-4">My Skills</h1>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-bold">{skill.name}</h6>
                <h6 className="font-weight-bold">{skill.level}%</h6>
              </div>
              <div className="progress">
                <div
                  className={`progress-bar ${skill.color}`}
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
