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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
