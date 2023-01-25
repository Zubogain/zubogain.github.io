export const getCurrentTimestamp = () => ~~(Date.now() / 1000);
export const getExparationTimestamp = (seconds = 0) => {
  const date = new Date(getCurrentTimestamp());
  date.setSeconds(date.getSeconds() + seconds);
  return date.getTime();
};
