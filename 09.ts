type Reverse<T extends string> = T extends `${infer First}${infer Last}`
  ? `${Reverse<Last>}${First}`
  : ``;
