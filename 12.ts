type FindSanta<T extends string[], Count extends any[] = []> = T extends [
  infer First,
  ...infer Rest extends string[]
]
  ? First extends `🎅🏼`
    ? Count["length"]
    : FindSanta<Rest, [...Count, any]>
  : never;
