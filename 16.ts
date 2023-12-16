// based on https://github.com/TkDodo/aot-2023/blob/main/16.ts

type FindSantaRow<
  TForest extends Array<any>,
  Acc extends Array<any> = []
> = TForest extends [infer Head, ...infer Tail]
  ? Head extends "🎅🏼"
    ? Acc["length"]
    : FindSantaRow<Tail, [...Acc, Head]>
  : never;

type CastToNumber<T extends string> = T extends `${infer Digit extends number}`
  ? Digit
  : never;

type FindSanta<T extends any[][]> = {
  [Key in keyof T]: FindSantaRow<T[Key]> extends never
    ? never
    : [CastToNumber<`${Key}`>, FindSantaRow<T[Key]>];
}[number];
