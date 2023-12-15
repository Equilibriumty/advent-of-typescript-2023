type AppendGood<T extends Record<PropertyKey, unknown>> = {
  [Key in keyof T as Key extends `${infer KeyType}`
    ? `good_${KeyType}`
    : never]: T[Key];
};
