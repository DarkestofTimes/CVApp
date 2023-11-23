/* eslint-disable react/prop-types */
import { useState } from "react";
import { Personal } from "./Personal.jsx";
import { Skills } from "./Skills.jsx";
import { Experience } from "./Experience.jsx";
import { Links } from "./Links.jsx";
import { Education } from "./Education.jsx";
import { RenderHeightOffset } from "./RenderHeightOffset.jsx";
import { Print } from "./Print.jsx";
import { Color } from "./Color.jsx";

export const Fields = ({
  personal,
  skills,
  experience,
  links,
  education,
  onChange,
  addItem,
  deleteItem,
  clearForm,
  setExperience,
  setEducation,
  expand,
  toggleExpand,
  refs,
  colors,
  setColors,
}) => {
  const [transitionDone, setTransitionDone] = useState({
    exp: false,
    ed: false,
  });

  const handleTransitionEnd = () => {
    setTransitionDone((prev) => !prev);
  };

  return (
    <div className="fields">
      <Personal
        personal={personal}
        onChange={onChange}
        toggleExpand={toggleExpand}
        expand={expand}
        fieldSectionRef={refs}
      />
      <Skills
        skills={skills}
        onChange={onChange}
        addItem={addItem}
        deleteItem={deleteItem}
        toggleExpand={toggleExpand}
        expand={expand}
        fieldSectionRef={refs}
      />
      <Experience
        experience={experience}
        addItem={addItem}
        onChange={onChange}
        deleteItem={deleteItem}
        toggleExpand={toggleExpand}
        expand={expand}
        setExperience={setExperience}
        fieldSectionRef={refs}
        transitionDone={transitionDone}
        handleTransitionEnd={handleTransitionEnd}
      />
      <Links
        links={links}
        onChange={onChange}
        addItem={addItem}
        deleteItem={deleteItem}
        toggleExpand={toggleExpand}
        expand={expand}
        fieldSectionRef={refs}
      />
      <Education
        education={education}
        addItem={addItem}
        onChange={onChange}
        deleteItem={deleteItem}
        toggleExpand={toggleExpand}
        expand={expand}
        setEducation={setEducation}
        fieldSectionRef={refs}
        handleTransitionEnd={handleTransitionEnd}
      />
      <Color colors={colors} setColors={setColors} />
      <div className="btnWrapper">
        <button className="clearForm" onClick={clearForm}>
          Clear
        </button>
        <Print />
      </div>
      <RenderHeightOffset
        refs={refs}
        expand={expand}
        transitionDone={transitionDone}
      />
    </div>
  );
};
