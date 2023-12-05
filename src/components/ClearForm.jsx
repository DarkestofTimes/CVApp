import { useClearFormContext } from "./DataContextProvider";

export const ClearForm = () => {
  const { clearForm } = useClearFormContext();
  return (
    <button className="clearForm" onClick={clearForm}>
      Clear
    </button>
  );
};
