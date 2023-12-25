type DayCounter<
  T extends number,
  U extends number,
  Acc extends any[] = []
> = T extends U ? T : T | DayCounter<[...Acc, any]["length"], U, [...Acc, any]>;
