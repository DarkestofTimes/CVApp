/* eslint-disable react/prop-types */
import { Personal } from "./Personal.jsx";
import { Skills } from "./Skills.jsx";
import { Experience } from "./Experience.jsx";
import { Links } from "./Links.jsx";
import { Education } from "./Education.jsx";
import { RenderHeightOffset } from "./RenderHeightOffset.jsx";
import { Print } from "./Print.jsx";
import { Color } from "./Color.jsx";
import { ClearForm } from "./ClearForm";

export const Fields = () => {
  return (
    <div className="fields">
      <Personal />
      <Skills />
      <Experience />
      <Links />
      <Education />
      <Color />
      <div className="btnWrapper">
        <ClearForm />
        <Print />
      </div>
      <RenderHeightOffset />
    </div>
  );
};
