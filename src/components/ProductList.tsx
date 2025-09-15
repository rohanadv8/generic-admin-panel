import { Product } from "@/client/dto/order.dto";

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  return (
    <div className="border p-4 rounded-md">
      <h3 className="font-semibold mb-2">Products</h3>
      <ul>
        {products.map((product) => (
          <li
            key={product.id}
            className="flex items-center gap-4 border-b py-2"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-gray-500">Qty: {product.quantity}</p>
            </div>
            <div className="font-semibold">
              ${(product.price * product.quantity).toFixed(2)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
