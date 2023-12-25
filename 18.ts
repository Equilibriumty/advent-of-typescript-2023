type Count<T extends unknown[], TToy, Counter extends any[] = []> = T extends [
  infer Head,
  ...infer Rest
]
  ? Head extends TToy
    ? Count<Rest, TToy, [...Counter, any]>
    : Count<Rest, TToy, Counter>
  : Counter["length"];
