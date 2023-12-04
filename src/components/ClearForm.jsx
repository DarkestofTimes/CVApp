import { useDataContext } from "./DataContextProvider";

export const ClearForm = () => {
  const { clearForm } = useDataContext();
  return (
    <button className="clearForm" onClick={clearForm}>
      Clear
    </button>
  );
};
