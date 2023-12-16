// based on https://github.com/TkDodo/aot-2023/blob/main/16.ts

type FindSantaRow<
  TForest extends any[],
  Counter extends any[] = []
> = TForest extends [infer Head, ...infer Tail]
  ? Head extends "🎅🏼"
    ? Counter["length"]
    : FindSantaRow<Tail, [...Counter, Head]>
  : never;

type CastToNumber<T extends string> = T extends `${infer Digit extends number}`
  ? Digit
  : never;

type FindSanta<T extends any[][]> = {
  [Key in keyof T]: FindSantaRow<T[Key]> extends never
    ? never
    : [CastToNumber<`${Key}`>, FindSantaRow<T[Key]>];
}[number];
