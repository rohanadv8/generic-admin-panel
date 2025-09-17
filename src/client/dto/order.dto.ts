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
// types/order.ts
export interface Product {
  productId: string;
  name: string;
  variant?: string; // e.g., model, strap, color etc
  imageUrl?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Address {
  name: string;
  company?: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone?: string;
}

export interface ShipmentEvent {
  date: string; // ISO or human‑readable
  status: string;
}

export interface Shipment {
  shipmentId: string;
  carrier: string;
  shippingMethod: string;
  trackingNumber: string;
  shippedDate: string;
  estimatedDelivery?: string;
  deliveredDate?: string;
  events: ShipmentEvent[];
}

export interface Transaction {
  transactionId: string;
  type: "charge" | "refund" | "other";
  amount: number;
  date: string;
  status: "success" | "pending" | "failed";
}

export interface AuditLog {
  date: string;
  changedBy: string;
  change: string;
}

export interface OrderDetails {
  id: string;
  status: string;
  products: Product[];
  shippingAddress: Address;
  billingAddress: Address;
  shippingMethod: string;
  carrier?: string;
  trackingNumbers?: string[];
  shipments: Shipment[];
  paymentMethod: string;
  transactions: Transaction[];
  subtotal: number;
  shippingCost: number;
  discounts: number;
  tax: number;
  grandTotal: number;
  amountPaid: number;
  amountDue: number;
  auditLogs?: AuditLog[];
  adminNotes?: string;
  customerNotes?: string;
  shippedDate?: string;
}
