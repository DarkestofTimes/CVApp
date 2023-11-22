/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export const EdItem = ({
  item,
  onChange,
  deleteItem,
  toggleExpand,
  edRef,
  handleTransitionEnd,
}) => {
  return (
    <div
      key={item.id}
      className="innerWrapper"
      ref={edRef}
      onTransitionEnd={handleTransitionEnd}
      data-id={item.id}>
      <h3 className="fieldsH2">
        <button onClick={toggleExpand} className="h3Button" data-id={item.id}>
          {item["School:"]}
        </button>
      </h3>
      <div className="content">
        {Object.keys(item).map((key) => (
          <div key={item.id + key} className="inputWrapper">
            {key == "id" ? "" : <label htmlFor={item.id + key}>{key}</label>}
            {key == "id" ? (
              ""
            ) : key == "Description:" ? (
              <textarea
                type="text"
                id={item.id + key}
                onChange={onChange}
                value={item[key]}
                data-set="education"
              />
            ) : (
              <input
                type="text"
                id={item.id + key}
                onChange={onChange}
                value={item[key]}
                autoComplete={
                  key === "email"
                    ? "true"
                    : key === "name"
                    ? "true"
                    : key === "tel"
                    ? "true"
                    : "false"
                }
                data-set="education"
              />
            )}
          </div>
        ))}

        <button
          className="deleteItem"
          data-id={item.id}
          onClick={deleteItem}
          data-set="education">
          Delete
        </button>
      </div>
    </div>
  );
};
