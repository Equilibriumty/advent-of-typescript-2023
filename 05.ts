type SantasList<T extends readonly any[], R extends readonly any[]> = [
  ...T,
  ...R
];
