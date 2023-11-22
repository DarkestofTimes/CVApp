/* eslint-disable react/prop-types */
import { createRef } from "react";
import { ExpItem } from "./ExpItem.jsx";

export const Experience = ({
  experience,
  addItem,
  onChange,
  deleteItem,
  toggleExpand,
  fieldSectionRef,
  handleTransitionEnd,
}) => {
  experience.map((exp) => (fieldSectionRef[exp.id] = createRef()));

  return (
    <section
      className="Experience fieldSection"
      ref={fieldSectionRef[2]}
      data-id="2">
      <h2 className="fieldsH2">
        <button onClick={toggleExpand} className="h2Button" data-id="2">
          Experience
        </button>
      </h2>
      <div className="content">
        {experience.map((item) => (
          <ExpItem
            key={item.id}
            item={item}
            onChange={onChange}
            deleteItem={deleteItem}
            toggleExpand={toggleExpand}
            expRef={fieldSectionRef[item.id]}
            handleTransitionEnd={handleTransitionEnd}
          />
        ))}
        <button className="addElement" onClick={addItem} data-set="experience">
          +
        </button>
      </div>
    </section>
  );
};
