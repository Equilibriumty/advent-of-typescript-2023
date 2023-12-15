type Address = { address: string; city: string };
type PresentDeliveryList<T> = {
  [Key in keyof T]: Address;
};
