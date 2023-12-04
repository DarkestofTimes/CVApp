/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { useDataContext } from "./DataContextProvider";

export const Personal = () => {
  const { personal, handleChange, toggleExpand, refs } = useDataContext();
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  }, []);

  return (
    <section className="personal fieldSection" ref={refs[0]} data-id="0">
      <h2 className="fieldsH2">
        <button
          onClick={toggleExpand}
          ref={buttonRef}
          className="h2Button"
          data-id="0">
          Personal
        </button>
      </h2>
      <div className="fieldContent">
        {Object.keys(personal).map((key) => (
          <div key={key} className="inputWrapper">
            <label htmlFor={key}>
              {key === "name"
                ? "Full Name:"
                : key === "role"
                ? "Role:"
                : key === "email"
                ? "EMail:"
                : key === "tel"
                ? "Phone:"
                : key === "loc"
                ? "location:"
                : "A few words:"}
            </label>
            {key === Object.keys(personal)[Object.keys(personal).length - 1] ? (
              <textarea
                type="text"
                id="persDesc"
                onChange={handleChange}
                value={personal[key]}
                data-set="personal"
              />
            ) : (
              <input
                type={
                  key === "email" ? "email" : key === "tel" ? "tel" : "text"
                }
                id={key}
                onChange={handleChange}
                value={personal[key]}
                autoComplete={
                  key === "email"
                    ? "true"
                    : key === "name"
                    ? "true"
                    : key === "tel"
                    ? "true"
                    : "false"
                }
                data-set="personal"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
