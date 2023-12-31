/* eslint-disable react/prop-types */
import {
  useLinksContext,
  useRefsContext,
  useExpandContext,
} from "./DataContextProvider";

export const Links = () => {
  const { links, addItem, handleChange, deleteItem } = useLinksContext();
  const { refs } = useRefsContext();
  const { toggleExpand } = useExpandContext();
  console.log("hi");
  return (
    <section className="Links fieldSection" ref={refs[3]} data-id="3">
      <h2 className="fieldsH2">
        <button onClick={toggleExpand} className="h2Button" data-id="3">
          Links
        </button>
      </h2>
      <div className="fieldContent">
        {links.length > 0
          ? links.map((link) => (
              <div key={link.id} className="inputWrapper">
                <label htmlFor={link.id + "name"}>Link to:</label>
                <input
                  type="text"
                  id={link.id + "name"}
                  value={link.name}
                  onChange={handleChange}
                  data-set="links"
                />
                <label htmlFor={link.id + "link"}>Link:</label>
                <input
                  type="text"
                  id={link.id + "link"}
                  value={link.link}
                  onChange={handleChange}
                  data-set="links"
                />
                <button
                  className="deleteItem"
                  data-set="links"
                  data-id={link.id}
                  onClick={deleteItem}>
                  Delete
                </button>
              </div>
            ))
          : ""}
        <button className="addItem" onClick={addItem} data-set="links">
          +
        </button>
      </div>
    </section>
  );
};
