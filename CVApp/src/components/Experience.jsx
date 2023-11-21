/* eslint-disable react/prop-types */
import { generateId } from "./generateId.jsx";
import { useState, useRef } from "react";
import { ExpItem } from "./ExpItem.jsx";
import { RenderHeightOffset } from "./RenderHeightOffset.jsx";

export const Experience = ({
  experience,
  onChange,
  deleteItem,
  toggleExpand,
  setExperience,
  fieldSectionRef,
}) => {
  const [innerExpand, setInnerExpand] = useState(0);
  const innerRefs = useRef({});

  const toggleInnerExpand = (ev) => {
    setInnerExpand((prevExpand) =>
      prevExpand === ev.target.getAttribute("data-id")
        ? null
        : ev.target.getAttribute("data-id")
    );
  };

  const handleAddItem = () => {
    const newItem = {
      "Company:": "",
      "Title:": "",
      "From:": "",
      "Till:": "",
      "Location:": "",
      "Description:": "",
      id: generateId(),
    };
    setExperience((prevExp) => [...prevExp, newItem]);

    setInnerExpand(newItem.id);
  };

  return (
    <section
      className="Experience fieldSection"
      ref={fieldSectionRef}
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
            innerExpand={innerExpand}
            toggleInnerExpand={toggleInnerExpand}
            /*  expRef={(el) => (innerRefs.current[item.id] = el)} */
          />
        ))}
        <button
          className="addElement"
          onClick={handleAddItem}
          data-set="experience">
          +
        </button>
      </div>
      {/*  <RenderHeightOffset refs={innerRefs} expand={innerExpand} /> */}
    </section>
  );
};
