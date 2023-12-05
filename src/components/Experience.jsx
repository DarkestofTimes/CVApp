/* eslint-disable react/prop-types */
import { createRef } from "react";
import { ExpItem } from "./ExpItem.jsx";
import {
  useExpContext,
  useTransitionContext,
  useRefsContext,
  useExpandContext,
} from "./DataContextProvider";

export const Experience = () => {
  const { experience, addItem, handleChange, deleteItem } = useExpContext();
  const { refs } = useRefsContext();
  const { toggleExpand } = useExpandContext();
  const { handleTransitionEnd } = useTransitionContext();
  experience.map((exp) => (refs[exp.id] = createRef()));

  return (
    <section className="Experience fieldSection" ref={refs[2]} data-id="2">
      <h2 className="fieldsH2">
        <button onClick={toggleExpand} className="h2Button" data-id="2">
          Experience
        </button>
      </h2>
      <div className="fieldContent">
        {experience.map((item) => (
          <ExpItem
            key={item.id}
            item={item}
            onChange={handleChange}
            deleteItem={deleteItem}
            toggleExpand={toggleExpand}
            expRef={refs[item.id]}
            handleTransitionEnd={handleTransitionEnd}
          />
        ))}
        <button className="addItem" onClick={addItem} data-set="experience">
          +
        </button>
      </div>
    </section>
  );
};
