export const truncateChars = (str: string, chars: number): string => {
  return str?.length > 150 ? `${str.substr(0, chars - 1)} ....` : str;
};
