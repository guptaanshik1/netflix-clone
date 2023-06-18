export const randomFromArray = <T>(arr: T[]): number => {
  return Math.floor(Math.random() * arr?.length - 1);
};
