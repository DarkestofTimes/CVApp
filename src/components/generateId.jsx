export const generateId = () => {
  const timeStamp = new Date().getTime();
  const random = Math.random().toString(36).substring(2);
  return (timeStamp + random).slice(0, 22).padEnd(22, "0");
};
