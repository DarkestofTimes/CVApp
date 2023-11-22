/* eslint-disable no-unused-vars */
import { useState, createRef } from "react";
import { Fields } from "./Fields.jsx";
import { Preview } from "./Preview.jsx";
import { generateId } from "./generateId.jsx";
import { Print } from "./Print.jsx";
import "../styles/App.css";

function App() {
  const [personal, setPersonal] = useState({
    name: "Madeup Madeupinson",
    role: "Senior Penguin Uplifter",
    email: "totalylegit@mail.nope",
    tel: "+88 8888 888 888",
    loc: "Fallen Penguin City, 55777",
    persDesc: "Helping penguins back on their feet is my true calling.",
  });
  const [skills, setSkills] = useState([
    {
      skill: "Setting penguins upright",
      description:
        "Requires certain amount of knowledge and experience to do it properly",
      id: generateId(),
    },
  ]);
  const [experience, setExperience] = useState([
    {
      "Company:": "United Nations, Flightless Birds Diplomatic Relations",
      "Title:": "Senior Penguin Uplifter",
      "From:": "2005",
      "Till:": "Present",
      "Location:": "Fallen Penguin City, 55777",
      "Description:":
        "Our task is to ensure that nothing like 'The Great Flightless War' can ever happen again",
      id: generateId(),
    },
  ]);
  const [links, setLinks] = useState([
    {
      name: "Penguin",
      link: "https://en.wikipedia.org/wiki/Penguin",
      id: generateId(),
    },
  ]);
  const [education, setEducation] = useState([
    {
      "School:": "International Uplifter Academy",
      "Degree:": "PhD Flightless birds Socio-economics",
      "From:": "1997",
      "Till:": "2005",
      "Location:": "Hidden Island, Atlantic Ocean",
      "Description:":
        "Rigorous applicant filtering, 8 years of studying, brightest minds of the planet. All of that dedicated to ensuring highest standard of qualification",
      id: generateId(),
    },
  ]);
  const refs = {
    0: createRef(),
    1: createRef(),
    2: createRef(),
    3: createRef(),
    4: createRef(),
  };
  const [expand, setExpand] = useState({
    outer: null,
    inner: null,
  });

  console.log(expand);

  const toggleExpand = (ev) => {
    if (ev.target.className.includes("h2Button")) {
      const outer =
        expand.outer === ev.target.getAttribute("data-id")
          ? null
          : ev.target.getAttribute("data-id");

      const inner = outer !== expand.outer ? null : expand.inner;
      setExpand((prevExpand) => ({
        inner: inner,
        outer: outer,
      }));
    } else {
      const inner =
        expand.inner === ev.target.getAttribute("data-id")
          ? null
          : ev.target.getAttribute("data-id");
      setExpand((prevExpand) => ({
        ...prevExpand,
        inner: inner,
      }));
    }
  };

  const handleChange = (ev) => {
    if (ev.target.getAttribute("data-set") == "personal") {
      setPersonal({
        ...personal,
        [ev.target.id]: ev.target.value,
      });
    }
    if (ev.target.getAttribute("data-set") == "skills") {
      const newSkills = [...skills];
      const mappedSkills = newSkills.map((skill) => {
        if (ev.target.id.slice(0, 22) === skill.id) {
          return {
            ...skill,
            [ev.target.id.slice(22)]: ev.target.value,
          };
        }
        return skill;
      });
      setSkills(mappedSkills);
    }
    if (ev.target.getAttribute("data-set") == "experience") {
      const newExperience = [...experience];
      const mappedExp = newExperience.map((exp) => {
        if (ev.target.id.slice(0, 22) == exp.id) {
          return {
            ...exp,
            [ev.target.id.slice(22)]: ev.target.value,
          };
        }
        return exp;
      });
      setExperience(mappedExp);
    }
    if (ev.target.getAttribute("data-set") == "links") {
      const newLinks = [...links];
      const mappedLinks = newLinks.map((link) => {
        if (ev.target.id.slice(0, 22) == link.id) {
          return {
            ...link,
            [ev.target.id.slice(22)]: ev.target.value,
          };
        }
        return link;
      });
      setLinks(mappedLinks);
    }
    if (ev.target.getAttribute("data-set") == "education") {
      const newEducation = [...education];
      const mappedExp = newEducation.map((ed) => {
        if (ev.target.id.slice(0, 22) == ed.id) {
          return {
            ...ed,
            [ev.target.id.slice(22)]: ev.target.value,
          };
        }
        return ed;
      });
      setEducation(mappedExp);
    }
  };

  const addItem = (ev) => {
    if (ev.target.getAttribute("data-set") == "skills") {
      const newSkills = [
        ...skills,
        {
          skill: "",
          description: "",
          id: generateId(),
        },
      ];
      setSkills(newSkills);
    }
    if (ev.target.getAttribute("data-set") == "links") {
      const newLinks = [
        ...links,
        {
          name: "",
          link: "",
          id: generateId(),
        },
      ];
      setLinks(newLinks);
    }
    if (ev.target.getAttribute("data-set") == "experience") {
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
      setExpand((prevExpand) => ({
        ...prevExpand,
        inner: newItem.id,
      }));
    }
    if (ev.target.getAttribute("data-set") == "education") {
      const newItem = {
        "School:": "",
        "Degree:": "",
        "From:": "",
        "Till:": "",
        "Location:": "",
        "Description:": "",
        id: generateId(),
      };
      setEducation((prevExp) => [...prevExp, newItem]);
      setExpand((prevExpand) => ({
        ...prevExpand,
        inner: newItem.id,
      }));
    }
  };

  const deleteItem = (ev) => {
    if (ev.target.getAttribute("data-set") == "skills") {
      const newSkills = skills.filter(
        (item) => item.id !== ev.target.getAttribute("data-id")
      );
      setSkills(newSkills);
    }
    if (ev.target.getAttribute("data-set") == "experience") {
      const newExp = experience.filter(
        (item) => item.id !== ev.target.getAttribute("data-id")
      );
      setExperience(newExp);
    }
    if (ev.target.getAttribute("data-set") == "links") {
      const newLinks = links.filter(
        (item) => item.id !== ev.target.getAttribute("data-id")
      );
      setLinks(newLinks);
    }
    if (ev.target.getAttribute("data-set") == "education") {
      const newEducation = education.filter(
        (item) => item.id !== ev.target.getAttribute("data-id")
      );
      setEducation(newEducation);
    }
  };

  const clearForm = () => {
    setPersonal({
      name: "",
      role: "",
      email: "",
      tel: "",
      loc: "",
      persDesc: "",
    });
    setSkills([]);
    setExperience([]);
    setLinks([]);
    setEducation([]);
  };

  return (
    <>
      <main>
        <Fields
          personal={personal}
          skills={skills}
          experience={experience}
          links={links}
          education={education}
          onChange={handleChange}
          addItem={addItem}
          clearForm={clearForm}
          deleteItem={deleteItem}
          setExperience={setExperience}
          setEducation={setEducation}
          expand={expand}
          toggleExpand={toggleExpand}
          refs={refs}
        />
        <Preview
          personal={personal}
          skills={skills}
          experience={experience}
          links={links}
          education={education}
        />
        <Print />
      </main>
    </>
  );
}

export default App;
