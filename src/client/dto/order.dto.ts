export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Address {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface TrackingInfo {
  carrier: string;
  trackingNumber: string;
  status: string;
  estimatedDelivery: string;
}

export interface PaymentMethod {
  type: string;
  last4: string;
  paid: boolean;
  total: number;
}

export interface Order {
  id: string;
  products: Product[];
  shippingAddress: Address;
  billingAddress: Address;
  trackingInfo: TrackingInfo;
  paymentMethod: PaymentMethod;
}
