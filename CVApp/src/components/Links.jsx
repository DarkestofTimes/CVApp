/* eslint-disable react/prop-types */

export const Links = ({
  links,
  onChange,
  deleteItem,
  addItem,
  toggleExpand,
  fieldSectionRef,
}) => {
  return (
    <section
      className="Links fieldSection"
      ref={fieldSectionRef[3]}
      data-id="3">
      <h2 className="fieldsH2">
        <button onClick={toggleExpand} className="h2Button" data-id="3">
          Links
        </button>
      </h2>
      <div className="content">
        {links.length > 0
          ? links.map((link) => (
              <div key={link.id} className="innerWrapper">
                <label htmlFor={link.id + "name"}>Link to:</label>
                <input
                  type="text"
                  id={link.id + "name"}
                  value={link.name}
                  onChange={onChange}
                  data-set="links"
                />
                <label htmlFor={link.id + "link"}>Link:</label>
                <input
                  type="text"
                  id={link.id + "link"}
                  value={link.link}
                  onChange={onChange}
                  data-set="links"
                />
                <button
                  className="deleteSkill"
                  data-set="links"
                  data-id={link.id}
                  onClick={deleteItem}>
                  X
                </button>
              </div>
            ))
          : ""}
        <button className="addElement" onClick={addItem} data-set="links">
          +
        </button>
      </div>
    </section>
  );
};
