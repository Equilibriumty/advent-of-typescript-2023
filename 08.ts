type RemoveNaughtyChildren<T extends unknown> = {
  [Key in keyof T as Key extends `naughty_${string}` ? never : Key]: T[Key];
};
