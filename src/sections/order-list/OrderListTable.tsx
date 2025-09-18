"use client";
import { OrderDetails } from "@/client/dto/order.dto";
import { OrderDetailsModal } from "./OrderDetailsModal";
import { useState } from "react";
import Button from "@/components/Button";

export default function FetchEventsTable() {
  const orderList = [
    {
      id: 1,
      orderId: "345662",
      customerName: "rohan",
      email: "3vru@1234gmail.com",
      phoneNumber: 8787878878,
      orderDate: "12/06/2025",
      totalAmt: "₹1,236,400",
      paymentStatus: "Received",
      orderStatus: "Pending",
    },
    {
      id: 2,
      orderId: "345662",
      customerName: "rohan",
      email: "3vru@1234gmail.com",
      phoneNumber: 8787878878,
      orderDate: "12/06/2025",
      totalAmt: "₹1,236,400",
      paymentStatus: "Received",
      orderStatus: "Pending",
    },
    {
      id: 3,
      orderId: "345662",
      customerName: "rohan",
      email: "3vru@1234gmail.com",
      phoneNumber: 8787878878,
      orderDate: "12/06/2025",
      totalAmt: "₹1,236,400",
      paymentStatus: "Received",
      orderStatus: "Pending",
    },
    {
      id: 4,
      orderId: "345662",
      customerName: "rohan",
      email: "3vru@1234gmail.com",
      phoneNumber: 8787878878,
      orderDate: "12/06/2025",
      totalAmt: "₹1,236,400",
      paymentStatus: "Received",
      orderStatus: "Pending",
    },
  ];
  const dummyOrder: OrderDetails = {
    id: "ABC123456",
    status: "Shipped",
    products: [
      {
        productId: "WAT001",
        name: "3002 M QZ COL",
        variant: "Steel/Black Dial",
        imageUrl: "/watches/3002 M QZ COL.png",
        quantity: 1,
        unitPrice: 120000,
        totalPrice: 120000,
        id: "",
        price: 0,
        image: "",
      },
      {
        productId: "WAT002",
        name: "3002 M QZ R",
        variant: "Steel / Hesalite",
        imageUrl: "/watches/3002MQZR.png",
        quantity: 1,
        unitPrice: 85000,
        totalPrice: 85000,
        id: "",
        price: 0,
        image: "",
      },
    ],
    shippingAddress: {
      name: "John Doe",
      company: "Acme Corp.",
      line1: "123 Main St.",
      line2: "Suite 4B",
      city: "Mumbai",
      state: "Maharashtra",
      zip: "400001",
      country: "India",
      phone: "+91 9876543210",
      street: "",
    },
    billingAddress: {
      name: "Jane Doe",
      company: "Beta LLC",
      line1: "456 Maple Ave.",
      line2: "",
      city: "Pune",
      state: "Maharashtra",
      zip: "411001",
      country: "India",
      phone: "+91 9123456789",
      street: "",
    },
    shippingMethod: "Express",
    carrier: "DHL",
    trackingNumbers: ["DHL123456789", "DHL987654321"],
    shippedDate: "2025-09-10",

    paymentMethod: "Credit Card •••• 4242",
    transactions: [
      {
        transactionId: "TXN001",
        type: "charge",
        amount: 200000,
        date: "2025-09-09 12:00:00",
        status: "success",
      },
    ],
    amountPaid: 200000,
    amountDue: 0,

    shipments: [
      {
        shipmentId: "SHP1",
        carrier: "DHL",
        shippingMethod: "Air",
        trackingNumber: "DHL123456789",
        shippedDate: "2025-09-10",
        estimatedDelivery: "2025-09-15",
        deliveredDate: "2025-09-14",
        events: [
          { date: "2025-09-10 08:00", status: "Picked up" },
          { date: "2025-09-11 12:00", status: "In transit" },
          { date: "2025-09-14 09:30", status: "Delivered" },
        ],
      },
    ],

    subtotal: 205000,
    shippingCost: 1500,
    discounts: 5000,
    tax: 18500,
    grandTotal: 221000,

    auditLogs: [
      {
        date: "2025-09-09 11:00",
        changedBy: "Admin A",
        change: "Order created",
      },
      {
        date: "2025-09-10 06:00",
        changedBy: "Admin A",
        change: "Payment succeeded",
      },
      {
        date: "2025-09-10 07:30",
        changedBy: "Admin B",
        change: "Marked as shipped",
      },
    ],

    adminNotes: "Customer requested gift wrap.",
    customerNotes: "Please leave at front desk if nobody home.",
  };
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="  bg-primary-200 p-4 rounded-lg shadow-2xl">
      {orderList?.length === 0 ? (
        <h2 className="mt-3 text-secondary-900">No event yet.</h2>
      ) : (
        <table className=" w-full  text-secondary-900  px-2 overflow-x-auto">
          <thead>
            <tr className="font-semibold bg-primary-400  w-full">
              <th className="p-2  ">Sr No.</th>
              <th className="p-2  ">Order ID</th>
              <th className="p-2  ">Customer Name</th>
              <th className="p-2  ">Email</th>
              <th className="p-2 ">Phone Number</th>
              <th className="p-2 ">Order Date</th>
              <th className="p-2 ">Total Amount</th>
              <th className="p-2 ">Payment Status</th>
              <th className="p-2 ">Order Status</th>
              <th className="p-2 ">Order Details</th>
            </tr>
          </thead>

          <tbody>
            {orderList?.map((event, index) => (
              <tr
                key={event?.id}
                className={`hover:bg-primary-600 text-sm ${
                  index % 2 === 0 ? "bg-primary-200" : "bg-primary-100"
                } `}
              >
                <td className="p-2  text-center ">{index + 1}</td>
                <td className="p-2  text-center">{event?.orderId}</td>
                <td className="p-2  text-center">{event?.customerName}</td>
                <td className="p-2  text-center">{event?.email}</td>
                <td className="p-2  text-center">{event?.phoneNumber}</td>
                <td className="p-2  text-center">{event?.orderDate}</td>
                <td className="p-2  text-center">{event?.totalAmt}</td>
                <td className="p-2  text-center">{event?.paymentStatus}</td>
                <td className="p-2  text-center">{event?.orderStatus}</td>
                <td className="py-2 px-1  text-center">
                  {" "}
                  {/* <button
                    // className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    onClick={() => setModalOpen(true)}
                  >
                    View Order {dummyOrder.id}
                  </button> */}
                  <Button
                    color="black"
                    onClick={() => setModalOpen(true)}
                    text={`View Order `}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div>
        <OrderDetailsModal
          order={dummyOrder}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </div>
  );
}
