export const Print = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <button className="printBtn" onClick={handlePrint}>
      Print
    </button>
  );
};
