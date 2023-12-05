/* eslint-disable react/prop-types */
import { useState } from "react";
import { SwatchesPicker } from "react-color";
import { useColorsContext } from "./DataContextProvider";

export const Color = () => {
  const { colors, setColors } = useColorsContext();
  const [showPicker, setShowPicker] = useState(null);

  const handleClick = (ev) => {
    const key = ev.target.className === "h2Color" ? 2 : 3;
    setShowPicker(showPicker === key ? null : key);
  };

  const handleColorChange = (newColor) => {
    setColors({
      ...colors,
      [showPicker]: newColor,
    });
    const variable =
      showPicker == 2 ? "--PREV-H2-C" : showPicker == 3 ? "--PREV-H3-C" : null;
    document.documentElement.style.setProperty(`${variable}`, newColor.hex);
    setShowPicker(null);
  };

  return (
    <div className="fieldsColor">
      <button className="h2Color" onClick={handleClick}></button>
      <button className="h3Color" onClick={handleClick}></button>
      {showPicker !== null && (
        <SwatchesPicker
          color={colors[showPicker]}
          onChange={handleColorChange}
          styles={{
            default: {
              body: {
                backgroundColor: "rgb(17, 17, 17)",
              },
            },
          }}
        />
      )}
    </div>
  );
};
