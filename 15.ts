type Tuple<
  T extends any,
  U extends number,
  R extends any[] = []
> = R["length"] extends U ? R : Tuple<T, U, [...R, T]>;
type BoxToys<T extends string, U extends number, C extends U = U> = C extends U
  ? Tuple<T, C>
  : never;
