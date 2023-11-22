/* eslint-disable react/prop-types */
export const Skills = ({
  skills,
  onChange,
  addItem,
  deleteItem,
  toggleExpand,
  fieldSectionRef,
}) => {
  return (
    <section
      className="Skills fieldSection"
      ref={fieldSectionRef[1]}
      data-id="1">
      <h2 className="fieldsH2">
        <button onClick={toggleExpand} className="h2Button" data-id="1">
          Skill Set
        </button>
      </h2>
      <div className="content">
        {skills.length > 0
          ? skills.map((skill) => (
              <div key={skill.id} className="innerWrapper">
                <label htmlFor={skill.id + "skill"}>Skill:</label>
                <input
                  type="text"
                  id={skill.id + "skill"}
                  value={skill.skill}
                  onChange={onChange}
                  data-set="skills"
                />
                <label htmlFor={skill.id + "skill"}>description:</label>
                <textarea
                  type="text"
                  id={skill.id + "description"}
                  value={skill.description}
                  onChange={onChange}
                  data-set="skills"
                />
                <button
                  className="deleteSkill"
                  data-set="skills"
                  data-id={skill.id}
                  onClick={deleteItem}>
                  X
                </button>
              </div>
            ))
          : ""}
        <button className="addElement" onClick={addItem} data-set="skills">
          +
        </button>
      </div>
    </section>
  );
};
