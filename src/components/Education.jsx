/* eslint-disable react/prop-types */
import { createRef } from "react";
import { EdItem } from "./EdItem.jsx";
import { useDataContext } from "./DataContextProvider";

export const Education = () => {
  const {
    education,
    addItem,
    handleChange,
    deleteItem,
    toggleExpand,
    refs,
    handleTransitionEnd,
  } = useDataContext();
  education.map((exp) => (refs[exp.id] = createRef()));

  return (
    <section className="Education fieldSection" ref={refs[4]} data-id="4">
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
            onChange={handleChange}
            deleteItem={deleteItem}
            toggleExpand={toggleExpand}
            edRef={refs[item.id]}
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
