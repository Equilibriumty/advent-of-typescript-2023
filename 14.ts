type DecipherNaughtyList<T extends string> =
  T extends `${infer First}/${infer Rest}`
    ? First | DecipherNaughtyList<Rest>
    : T;
