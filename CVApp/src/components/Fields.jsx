/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useState } from "react";
import { Personal } from "./Personal.jsx";
import { Skills } from "./Skills.jsx";
import { Experience } from "./Experience.jsx";
import { Links } from "./Links.jsx";
import { Education } from "./Education.jsx";
import { RenderHeightOffset } from "./RenderHeightOffset.jsx";

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
}) => {
  const [expand, setExpand] = useState(0);

  const toggleExpand = (ev) => {
    setExpand((prevExpand) =>
      prevExpand === +ev.target.getAttribute("data-id")
        ? null
        : +ev.target.getAttribute("data-id")
    );
  };

  const fieldSectionsRef = {
    0: useRef(),
    1: useRef(),
    2: useRef(),
    3: useRef(),
    4: useRef(),
  };

  return (
    <div className="fields">
      <button className="clearForm" onClick={clearForm}>
        Clear
      </button>
      <Personal
        personal={personal}
        onChange={onChange}
        toggleExpand={toggleExpand}
        expand={expand}
        fieldSectionRef={fieldSectionsRef[0]}
      />
      <Skills
        skills={skills}
        onChange={onChange}
        addItem={addItem}
        deleteItem={deleteItem}
        toggleExpand={toggleExpand}
        expand={expand}
        fieldSectionRef={fieldSectionsRef[1]}
      />
      <Experience
        experience={experience}
        onChange={onChange}
        deleteItem={deleteItem}
        toggleExpand={toggleExpand}
        expand={expand}
        setExperience={setExperience}
        fieldSectionRef={fieldSectionsRef[2]}
      />
      <Links
        links={links}
        onChange={onChange}
        addItem={addItem}
        deleteItem={deleteItem}
        toggleExpand={toggleExpand}
        expand={expand}
        fieldSectionRef={fieldSectionsRef[3]}
      />
      <Education
        education={education}
        onChange={onChange}
        deleteItem={deleteItem}
        toggleExpand={toggleExpand}
        expand={expand}
        setEducation={setEducation}
        fieldSectionRef={fieldSectionsRef[4]}
      />
      <RenderHeightOffset refs={fieldSectionsRef} expand={expand} />
    </div>
  );
};
