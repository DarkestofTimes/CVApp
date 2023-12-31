/* eslint-disable react/prop-types */
import {
  usePersonalContext,
  useSkillsContext,
  useExpContext,
  useLinksContext,
  useEdContext,
} from "./DataContextProvider";

export const Preview = () => {
  return (
    <section className="preview">
      <Personal />
      <Experience />
      <Education />
      <div className="previewSndCol">
        <Skills />
        <Links />
      </div>
    </section>
  );
};

const Personal = () => {
  const { personal } = usePersonalContext();
  return (
    <div className="personalWrapper">
      <h2 className="previewH2">{personal.name}</h2>
      <h3 className="previewH3">{personal.role}</h3>
      <p className="previewData">
        <strong>{personal.email ? "Email:" : ""} </strong>
        {personal.email}
      </p>
      <p className="previewData">
        {" "}
        <strong>{personal.tel ? "Phone:" : ""} </strong>
        {personal.tel}
      </p>
      <p className="previewData">
        <strong>{personal.loc ? "Location:" : ""} </strong>
        {personal.loc}
      </p>
      <p className="previewDesc">{personal.persDesc}</p>
    </div>
  );
};

const Skills = () => {
  const { skills } = useSkillsContext();
  return (
    skills.length > 0 && (
      <div className="previewSkillsWrapper">
        <h2 className="previewH2">Skill Set</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill.id} className="previewSkillWrapper">
              <h3 className="previewH3">{skill.skill}</h3>
              <p className="previewDesc">{skill.description}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

const Experience = () => {
  const { experience } = useExpContext();
  return (
    experience.length > 0 && (
      <div className="previewExpsWrapper">
        <h2 className="previewH2">Experience</h2>
        <ul>
          {experience.map((exp) => (
            <li key={exp.id} className="previewExpWrapper">
              {" "}
              <h3 className="previewH3">{exp["Company:"]}</h3>
              {Object.keys(exp).map((key, index) =>
                key === "id" ? null : index === 0 ? null : (
                  <p key={exp.id + key} className="previewData">
                    <strong>{key}</strong> {exp[key]}
                  </p>
                )
              )}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

const Links = () => {
  const { links } = useLinksContext();
  return (
    links.length > 0 && (
      <div className="previewLinksWrapper">
        <h2 className="previewH2">Links</h2>
        <ul>
          {links.map((link) => (
            <li key={link.id} className="previewLinkWrapper">
              <h3 className="previewH3">{link.name}</h3>
              <a href={link.link} target="_blank" rel="noreferrer">
                {link.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

const Education = () => {
  const { education } = useEdContext();
  return (
    education.length > 0 && (
      <div className="previewEdsWrapper">
        <h2 className="previewH2">Education</h2>
        <ul>
          {education.map((ed) => (
            <li key={ed.id} className="previewEdWrapper">
              <h3 className="previewH3">{ed["School:"]}</h3>
              {Object.keys(ed).map((key, index) =>
                key === "id" ? null : index === 0 ? null : (
                  <p key={ed.id + key} className="previewData">
                    <strong>{key}</strong> {ed[key]}
                  </p>
                )
              )}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
