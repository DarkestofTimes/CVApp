/* eslint-disable react/prop-types */
import { useDataContext } from "./DataContextProvider";

export const Skills = () => {
  const { skills, handleChange, addItem, deleteItem, toggleExpand, refs } =
    useDataContext();
  return (
    <section className="Skills fieldSection" ref={refs[1]} data-id="1">
      <h2 className="fieldsH2">
        <button onClick={toggleExpand} className="h2Button" data-id="1">
          Skill Set
        </button>
      </h2>
      <div className="fieldContent">
        {skills.length > 0
          ? skills.map((skill) => (
              <div key={skill.id} className="inputWrapper">
                <label htmlFor={skill.id + "skill"}>Skill:</label>
                <input
                  type="text"
                  id={skill.id + "skill"}
                  value={skill.skill}
                  onChange={handleChange}
                  data-set="skills"
                />
                <label htmlFor={skill.id + "skill"}>description:</label>
                <textarea
                  type="text"
                  id={skill.id + "description"}
                  value={skill.description}
                  onChange={handleChange}
                  data-set="skills"
                />
                <button
                  className="deleteItem"
                  data-set="skills"
                  data-id={skill.id}
                  onClick={deleteItem}>
                  Delete
                </button>
              </div>
            ))
          : ""}
        <button className="addItem" onClick={addItem} data-set="skills">
          +
        </button>
      </div>
    </section>
  );
};
