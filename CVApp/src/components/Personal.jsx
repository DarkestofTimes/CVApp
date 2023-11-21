/* eslint-disable react/prop-types */
export const Personal = ({
  personal,
  onChange,
  toggleExpand,
  fieldSectionRef,
}) => {
  return (
    <section
      className="personal fieldSection"
      ref={fieldSectionRef}
      data-id="0">
      <h2 className="fieldsH2">
        <button onClick={toggleExpand} className="h2Button" data-id="0">
          Personal
        </button>
      </h2>
      <div className="content">
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
                onChange={onChange}
                value={personal[key]}
                data-set="personal"
              />
            ) : (
              <input
                type={
                  key === "email" ? "email" : key === "tel" ? "tel" : "text"
                }
                id={key}
                onChange={onChange}
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
