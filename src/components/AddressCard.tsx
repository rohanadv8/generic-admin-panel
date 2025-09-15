import { Address } from "@/client/dto/order.dto";

type Props = {
  title: string;
  address: Address;
};

export default function AddressCard({ title, address }: Props) {
  return (
    <div className="border p-4 rounded-md">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p>{address.name}</p>
      <p>{address.street}</p>
      <p>{`${address.city}, ${address.state} ${address.zip}`}</p>
      <p>{address.country}</p>
    </div>
  );
}
