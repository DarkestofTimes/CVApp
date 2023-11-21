import { useEffect } from "react";

export const RenderHeightOffset = ({ expand, refs }) => {
  const calculateTotalHeight = (element) => {
    return Array.from(element.children).reduce(
      (totalHeight, child) => totalHeight + child.offsetHeight,
      0
    );
  };

  useEffect(() => {
    console.log(refs);
    Object.keys(refs).forEach((key) => {
      const currentRef = refs[key].current;

      if (currentRef) {
        if (expand == currentRef.getAttribute("data-id")) {
          currentRef.style.height = `${calculateTotalHeight(currentRef)}px`;
        } else {
          currentRef.style.height = `${
            currentRef.querySelector(".h2Button").offsetHeight + 4
          }px`;
        }
      }
    });
  }, [expand, refs]);
};
