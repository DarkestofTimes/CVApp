/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, createRef, createContext, useContext } from "react";
import { generateId } from "./generateId.jsx";

const PersonalContext = createContext({});
const SkillsContext = createContext({});
const ExpContext = createContext({});
const LinksContext = createContext({});
const EdContext = createContext({});
const RefsContext = createContext({});
const ExpandContext = createContext({});
const ColorsContext = createContext({});
const TransitionContext = createContext({});
const ClearFormContext = createContext({});

const ExpandContextProvider = ({ children }) => {
  const [expand, setExpand] = useState({
    outer: null,
    inner: null,
  });

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

  const contextItems = {
    expand,
    setExpand,
    toggleExpand,
  };

  return (
    <ExpandContext.Provider value={contextItems}>
      {children}
    </ExpandContext.Provider>
  );
};

const PersonalContextProvider = ({ children }) => {
  const [personal, setPersonal] = useState({
    name: "Madeup Madeupinson",
    role: "Senior Penguin Up Righter",
    email: "totalylegit@mail.nope",
    tel: "+88 8888 888 888",
    loc: "Fallen Penguin City, 55777",
    persDesc: "Helping penguins back on their feet is my true calling.",
  });

  const handleChange = (ev) => {
    setPersonal({
      ...personal,
      [ev.target.id]: ev.target.value,
    });
  };

  const contextItems = {
    personal,
    handleChange,
    setPersonal,
  };
  return (
    <PersonalContext.Provider value={contextItems}>
      {children}
    </PersonalContext.Provider>
  );
};

const SkillsContextProvider = ({ children }) => {
  const [skills, setSkills] = useState([
    {
      skill: "Setting penguins upright",
      description:
        "Requires certain amount of knowledge and experience to do it properly",
      id: generateId(),
    },
  ]);

  const handleChange = (ev) => {
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
  };

  const addItem = (ev) => {
    const newSkills = [
      ...skills,
      {
        skill: "",
        description: "",
        id: generateId(),
      },
    ];
    setSkills(newSkills);
  };

  const deleteItem = (ev) => {
    const newSkills = skills.filter(
      (item) => item.id !== ev.target.getAttribute("data-id")
    );
    setSkills(newSkills);
  };

  const contextItems = {
    skills,
    setSkills,
    handleChange,
    addItem,
    deleteItem,
  };

  return (
    <SkillsContext.Provider value={contextItems}>
      {children}
    </SkillsContext.Provider>
  );
};

const ExpContextProvider = ({ children }) => {
  const { setExpand } = useExpandContext();
  const [experience, setExperience] = useState([
    {
      "Company:": "United Nations, Flightless Birds Diplomatic Relations",
      "Title:": "Senior Penguin Up Righter",
      "From:": "2005",
      "Till:": "Present",
      "Location:": "Fallen Penguin City, 55777",
      "Description:":
        "Our task is to ensure that nothing like 'The Great Flightless War' can ever happen again",
      id: generateId(),
    },
  ]);

  const handleChange = (ev) => {
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
  };

  const addItem = (ev) => {
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
  };

  const deleteItem = (ev) => {
    const newExp = experience.filter(
      (item) => item.id !== ev.target.getAttribute("data-id")
    );
    setExperience(newExp);
  };

  const contextItems = {
    experience,
    setExperience,
    handleChange,
    addItem,
    deleteItem,
  };

  return (
    <ExpContext.Provider value={contextItems}>{children}</ExpContext.Provider>
  );
};

const LinksContextProvider = ({ children }) => {
  const [links, setLinks] = useState([
    {
      name: "Penguin",
      link: "https://en.wikipedia.org/wiki/Penguin",
      id: generateId(),
    },
  ]);

  const handleChange = (ev) => {
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
  };

  const addItem = (ev) => {
    const newLinks = [
      ...links,
      {
        name: "",
        link: "",
        id: generateId(),
      },
    ];
    setLinks(newLinks);
  };

  const deleteItem = (ev) => {
    const newLinks = links.filter(
      (item) => item.id !== ev.target.getAttribute("data-id")
    );
    setLinks(newLinks);
  };

  const contextItems = {
    links,
    setLinks,
    handleChange,
    addItem,
    deleteItem,
  };

  return (
    <LinksContext.Provider value={contextItems}>
      {children}
    </LinksContext.Provider>
  );
};

const EdContextProvider = ({ children }) => {
  const { setExpand } = useExpandContext;
  const [education, setEducation] = useState([
    {
      "School:": "International Up Righter Academy",
      "Degree:": "PhD Flightless birds Socio-economics",
      "From:": "1997",
      "Till:": "2005",
      "Location:": "Hidden Island, Atlantic Ocean",
      "Description:":
        "Rigorous applicant filtering, 8 years of studying, brightest minds of the planet. All of that dedicated to ensuring highest standard of qualification",
      id: generateId(),
    },
  ]);

  const handleChange = (ev) => {
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
  };

  const addItem = (ev) => {
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
  };

  const deleteItem = (ev) => {
    const newEducation = education.filter(
      (item) => item.id !== ev.target.getAttribute("data-id")
    );
    setEducation(newEducation);
  };

  const contextItems = {
    education,
    setEducation,
    handleChange,
    addItem,
    deleteItem,
  };

  return (
    <EdContext.Provider value={contextItems}>{children}</EdContext.Provider>
  );
};

const RefsContextProvider = ({ children }) => {
  const refs = {
    0: createRef(),
    1: createRef(),
    2: createRef(),
    3: createRef(),
    4: createRef(),
  };
  const contextItems = {
    refs,
  };
  return (
    <RefsContext.Provider value={contextItems}>{children}</RefsContext.Provider>
  );
};

const ColorsContextProvider = ({ children }) => {
  const [colors, setColors] = useState({
    2: "#b92e04",
    3: "#9c2a4e",
  });

  const contextItems = {
    colors,
    setColors,
  };

  return (
    <ColorsContext.Provider value={contextItems}>
      {children}
    </ColorsContext.Provider>
  );
};

const TransitionContextProvider = ({ children }) => {
  const [transitionDone, setTransitionDone] = useState({
    exp: false,
    ed: false,
  });

  const handleTransitionEnd = () => {
    setTransitionDone((prev) => !prev);
  };

  const contextItems = {
    transitionDone,
    handleTransitionEnd,
  };

  return (
    <TransitionContext.Provider value={contextItems}>
      {children}
    </TransitionContext.Provider>
  );
};

const ClearFormContextProvider = ({ children }) => {
  const { setPersonal } = usePersonalContext();
  const { setSkills } = useSkillsContext();
  const { setExperience } = useExpContext();
  const { setLinks } = useLinksContext();
  const { setEducation } = useEdContext();

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

  const contextItems = {
    clearForm,
  };

  return (
    <ClearFormContext.Provider value={contextItems}>
      {children}
    </ClearFormContext.Provider>
  );
};

export const DataContextProvider = ({ children }) => {
  return (
    <ExpandContextProvider>
      <RefsContextProvider>
        <PersonalContextProvider>
          <SkillsContextProvider>
            <ExpContextProvider>
              <LinksContextProvider>
                <EdContextProvider>
                  <TransitionContextProvider>
                    <ClearFormContextProvider>
                      <ColorsContextProvider>{children}</ColorsContextProvider>
                    </ClearFormContextProvider>
                  </TransitionContextProvider>
                </EdContextProvider>
              </LinksContextProvider>
            </ExpContextProvider>
          </SkillsContextProvider>
        </PersonalContextProvider>
      </RefsContextProvider>
    </ExpandContextProvider>
  );
};

export const useExpandContext = () => useContext(ExpandContext);
export const usePersonalContext = () => useContext(PersonalContext);
export const useSkillsContext = () => useContext(SkillsContext);
export const useExpContext = () => useContext(ExpContext);
export const useLinksContext = () => useContext(LinksContext);
export const useEdContext = () => useContext(EdContext);
export const useRefsContext = () => useContext(RefsContext);
export const useColorsContext = () => useContext(ColorsContext);
export const useTransitionContext = () => useContext(TransitionContext);
export const useClearFormContext = () => useContext(ClearFormContext);
