/**
 * Gets any number of strings as input and returns the strings
 * as a combined one. If a boolean was provided, it will just be
 * skipped (Useful for && shortcut).
 *
 * @param classes A list of classes which should get combined.
 *
 * @returns The provided classes combined to one string.
 */
export const classNames = (...classes: (string | boolean)[]) => {
  return (
    classes.filter((single) => typeof single === 'string').join(' ') ||
    undefined
  );
};
