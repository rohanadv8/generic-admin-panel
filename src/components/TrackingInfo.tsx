export interface TrackingInfo {
  carrier: string;
  trackingNumber: string;
  status: string;
  estimatedDelivery: string;
}

interface Props {
  tracking: TrackingInfo;
}

export default function TrackingInfo({ tracking }: Props) {
  return (
    <div className="border p-4 rounded-md">
      <h3 className="font-semibold mb-2">Tracking Information</h3>
      <p>
        <span className="font-medium">Carrier:</span> {tracking.carrier}
      </p>
      <p>
        <span className="font-medium">Tracking #:</span>{" "}
        {tracking.trackingNumber}
      </p>
      <p>
        <span className="font-medium">Status:</span> {tracking.status}
      </p>
      <p>
        <span className="font-medium">ETA:</span> {tracking.estimatedDelivery}
      </p>
    </div>
  );
}
