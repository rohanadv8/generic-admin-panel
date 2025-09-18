// components/OrderDetailsModal.tsx
import React from "react";
import Image from "next/image";
import {
  OrderDetails,
  Shipment,
  Product,
  ShipmentEvent,
} from "@/client/dto/order.dto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { XMarkIcon } from '@heroicons/react/24/solid';

interface Props {
  order: OrderDetails;
  isOpen: boolean;
  onClose: () => void;
}

export const OrderDetailsModal: React.FC<Props> = ({
  order,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50  bg-black bg-opacity-50 flex justify-center items-start p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full mt-16 mb-8 overflow-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-b-secondary-900 bg-primary-600 px-6 py-4">
          <div>
            <h2 className="text-2xl font-semibold text-secondary-900">
              Order Details #{order.id}
            </h2>
            <p className="text-sm text-secondary-800">
              Status: <span className="font-medium">{order.status}</span>
            </p>
          </div>

          <FontAwesomeIcon
            icon={faXmark}
            className=" text-sm w-5 p-0.5 rounded text-primary-600 bg-secondary-900 hover:bg-secondary-800"
            onClick={() => onClose()}
          />
        </div>

        {/* Body */}
        <div className="px-6 py-4 space-y-6 bg-primary-200 text-secondary-900">
          {/* Product List */}
          <section>
            <h3 className="text-lg font-bold mb-2">Products</h3>
            <div className="  divide-y  divide-secondary-900 ">
              {order.products.map((prod: Product) => (
                <div key={prod.productId} className="flex items-center py-4">
                  {/* {prod.imageUrl && (
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      className="w-20 h-20 object-cover rounded-md mr-4"
                    />
                  )} */}
                  {prod.imageUrl && (
                    <Image
                      src={prod.imageUrl}
                      alt="Watch Image"
                      width={80}
                      height={140}
                      className=" object-cover  rounded-md mr-4"
                    />
                  )}
                  <div className="flex-1">
                    <p className="font-medium">{prod.name}</p>
                    {prod.variant && (
                      <p className="text-sm text-secondary-800">
                        Variant: {prod.variant}
                      </p>
                    )}
                    <p className="text-sm text-secondary-800">
                      Qty: {prod.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      ₹{prod.totalPrice.toFixed(2)}
                    </p>
                    <p className="text-sm text-secondary-800">
                      Unit: ₹{prod.unitPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-right space-y-1">
              <p>
                Subtotal:{" "}
                <span className="font-medium">
                  ₹{order.subtotal.toFixed(2)}
                </span>
              </p>
              <p>
                Shipping:{" "}
                <span className="font-medium">
                  ₹{order.shippingCost.toFixed(2)}
                </span>
              </p>
              <p>
                Discounts:{" "}
                <span className="font-medium text-green-600">
                  ‑₹{order.discounts.toFixed(2)}
                </span>
              </p>
              <p>
                Tax:{" "}
                <span className="font-medium">₹{order.tax.toFixed(2)}</span>
              </p>
              <p className="text-xl font-bold">
                Grand Total: ₹{order.grandTotal.toFixed(2)}
              </p>
            </div>
          </section>

          {/* Addresses */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-secondary-900 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Shipping Address</h3>
              <AddressCard address={order.shippingAddress} />
            </div>
            <div className="border border-secondary-900 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Billing Address</h3>
              <AddressCard address={order.billingAddress} />
            </div>
          </section>

          {/* Tracking / Shipments */}
          <section>
            <h3 className="text-lg font-bold mb-2">Shipments & Tracking</h3>
            <div className="space-y-4">
              {order.shipments.map((shipment: Shipment) => (
                <div
                  key={shipment.shipmentId}
                  className="border border-secondary-900 rounded-lg p-4"
                >
                  <p>
                    <span className="font-semibold">Shipment ID:</span>{" "}
                    {shipment.shipmentId}
                  </p>
                  <p>
                    <span className="font-semibold">Carrier:</span>{" "}
                    {shipment.carrier}
                  </p>
                  <p>
                    <span className="font-semibold">Method:</span>{" "}
                    {shipment.shippingMethod}
                  </p>
                  <p>
                    <span className="font-semibold">Tracking #:</span>{" "}
                    {shipment.trackingNumber}
                  </p>
                  <p>
                    <span className="font-semibold">Shipped Date:</span>{" "}
                    {shipment.shippedDate}
                  </p>
                  {shipment.estimatedDelivery && (
                    <p>
                      <span className="font-semibold">Estimated Delivery:</span>{" "}
                      {shipment.estimatedDelivery}
                    </p>
                  )}
                  {shipment.deliveredDate && (
                    <p>
                      <span className="font-semibold">Delivered Date:</span>{" "}
                      {shipment.deliveredDate}
                    </p>
                  )}
                  {/* Events / timeline */}
                  <div className="mt-3 space-y-1">
                    {shipment.events.map((ev: ShipmentEvent, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between text-sm text-secondary-800"
                      >
                        <span>{ev.date}</span>
                        <span>{ev.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Payment Info & Transactions */}
          <section>
            <h3 className="text-lg font-bold mb-2">Payment & Transactions</h3>
            <div className="border border-secondary-900 rounded-lg p-4 space-y-2">
              <p>
                <span className="font-semibold">Payment Method:</span>{" "}
                {order.paymentMethod}
              </p>
              <p>
                <span className="font-semibold">Amount Paid:</span> ₹
                {order.amountPaid.toFixed(2)}
              </p>
              <p>
                <span className="font-semibold">Amount Due:</span> ₹
                {order.amountDue.toFixed(2)}
              </p>
              <div className="mt-3">
                <h4 className="font-semibold">Transactions</h4>
                <div className="divide-y">
                  {order.transactions.map((txn) => (
                    <div
                      key={txn.transactionId}
                      className="py-2 flex justify-between text-sm"
                    >
                      <div>
                        <p className="font-medium">
                          {txn.type.toUpperCase()} (#{txn.transactionId})
                        </p>
                        <p className="text-secondary-800">{txn.date}</p>
                      </div>
                      <div
                        className={`font-semibold ${
                          txn.status === "success"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {txn.status === "success" ? "✔" : "✖"} ₹
                        {txn.amount.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* Notes */}
          {/* {order.customerNotes && (
            <section>
              <h3 className="text-lg font-bold mb-1">Customer Notes</h3>
              <p className="text-gray-800">{order.customerNotes}</p>
            </section>
          )}
          {order.adminNotes && (
            <section>
              <h3 className="text-lg font-bold mb-1">Admin Notes</h3>
              <p className="text-gray-800">{order.adminNotes}</p>
            </section>
          )} */}

          {/* Audit Logs (optional) */}
          {/* {order.auditLogs && order.auditLogs.length > 0 && (
            <section>
              <h3 className="text-lg font-bold mb-2">Audit Log</h3>
              <div className="border rounded-lg p-4 space-y-1 text-sm text-gray-600">
                {order.auditLogs.map((log, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span>{log.date}</span>
                    <span>
                      {log.changedBy}: {log.change}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )} */}
        </div>

        {/* Footer */}
        {/* <div className="border-t px-6 py-4 flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            onClick={onClose}
          >
            Close
          </button>
          <button className="px-4 py-2 bg-blue-600 text-secondary-900 rounded-md hover:bg-blue-700">
            Download Invoice
          </button>
        </div> */}
      </div>
    </div>
  );
};

// AddressCard helper
interface AddressCardProps {
  address: {
    name: string;
    company?: string;
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    phone?: string;
  };
}

const AddressCard: React.FC<AddressCardProps> = ({ address }) => {
  return (
    <div className=" text-sm text-secondary-800">
      <p className="font-medium">{address.name}</p>
      {address.company && <p>{address.company}</p>}
      <p>{address.line1}</p>
      {address.line2 && <p>{address.line2}</p>}
      <p>
        {address.city}, {address.state} {address.zip}
      </p>
      <p>{address.country}</p>
      {address.phone && <p>Phone: {address.phone}</p>}
    </div>
  );
};
