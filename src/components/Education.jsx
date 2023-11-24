/* eslint-disable react/prop-types */
import { createRef } from "react";
import { EdItem } from "./EdItem.jsx";

export const Education = ({
  education,
  addItem,
  onChange,
  deleteItem,
  toggleExpand,
  fieldSectionRef,
  handleTransitionEnd,
}) => {
  education.map((exp) => (fieldSectionRef[exp.id] = createRef()));

  return (
    <section
      className="Education fieldSection"
      ref={fieldSectionRef[4]}
      data-id="4">
      <h2 className="fieldsH2">
        <button onClick={toggleExpand} className="h2Button" data-id="4">
          Education
        </button>
      </h2>
      <div className="fieldContent">
        {education.map((item) => (
          <EdItem
            key={item.id}
            item={item}
            onChange={onChange}
            deleteItem={deleteItem}
            toggleExpand={toggleExpand}
            edRef={fieldSectionRef[item.id]}
            handleTransitionEnd={handleTransitionEnd}
          />
        ))}
        <button className="addItem" onClick={addItem} data-set="education">
          +
        </button>
      </div>
    </section>
  );
};
