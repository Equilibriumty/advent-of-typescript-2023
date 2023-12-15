type SantaListProtector<T> = {
  readonly [Key in keyof T]: keyof T[Key] extends never
    ? T[Key]
    : SantaListProtector<T[Key]>;
};
