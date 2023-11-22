import { useEffect } from "react";

export const RenderHeightOffset = ({ expand, refs, transitionDone }) => {
  const calculateTotalHeight = (element) => {
    return Array.from(element.children).reduce(
      (totalHeight, child) => totalHeight + child.scrollHeight,
      0
    );
  };

  useEffect(() => {
    Object.keys(refs).forEach((key) => {
      const currentRef = refs[key].current;
      if (currentRef) {
        if (expand.outer == currentRef.getAttribute("data-id")) {
          currentRef.style.height = `${
            calculateTotalHeight(currentRef) + 20
          }px`;
        } else if (expand.inner == currentRef.getAttribute("data-id")) {
          currentRef.style.height = `${calculateTotalHeight(currentRef)}px`;
        } else {
          if (!currentRef.classList.contains("fieldSection")) {
            currentRef.style.height = `${
              currentRef.querySelector(".h3Button").offsetHeight
            }px`;
          } else if (currentRef.classList.contains("fieldSection")) {
            currentRef.style.height = `${
              currentRef.querySelector(".h2Button").offsetHeight
            }px`;
          }
        }
      }
    });
  }, [expand, refs, transitionDone]);
};
