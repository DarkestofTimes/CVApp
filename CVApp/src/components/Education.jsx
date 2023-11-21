/* eslint-disable react/prop-types */
import { useState } from "react";
import { generateId } from "./generateId.jsx";
import { EdItem } from "./EdItem.jsx";
import { RenderHeightOffset } from "./RenderHeightOffset.jsx";

export const Education = ({
  education,
  onChange,
  deleteItem,
  toggleExpand,
  setEducation,
  fieldSectionRef,
}) => {
  const [innerExpand, setInnerExpand] = useState(0);
  const edRef = {};

  const toggleInnerExpand = (ev) => {
    setInnerExpand((prevExpand) =>
      prevExpand === ev.target.getAttribute("data-id")
        ? null
        : ev.target.getAttribute("data-id")
    );
  };

  const handleAddItem = () => {
    const newItem = {
      "School:": "",
      "Degree:": "",
      "From:": "",
      "Till:": "",
      "Location:": "",
      "Description:": "",
      id: generateId(),
    };
    setEducation((prevEd) => [...prevEd, newItem]);

    setInnerExpand(newItem.id);
  };
  return (
    <section
      className="Education fieldSection"
      ref={fieldSectionRef}
      data-id="4">
      <h2 className="fieldsH2">
        <button onClick={toggleExpand} className="h2Button" data-id="4">
          Education
        </button>
      </h2>
      <div className="content">
        {/*  {education.map((item) => (
          <EdItem
            key={item.id}
            item={item}
            onChange={onChange}
            deleteItem={deleteItem}
            innerExpand={innerExpand}
            toggleInnerExpand={toggleInnerExpand}
            edRef={edRef}
          />
        ))} */}
        <button
          className="addElement"
          onClick={handleAddItem}
          data-set="education">
          +
        </button>
      </div>
    </section>
  );
};
