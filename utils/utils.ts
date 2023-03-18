export const firstChatToUpper = (str: string) => {
  const first = str.split("")[0].toUpperCase();
  return first + str.slice(1);
};
