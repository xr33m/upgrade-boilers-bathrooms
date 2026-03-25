import { Droplet } from 'lucide-react';

export default function WaterDrip() {
  return (
    <div className="relative h-16 flex items-center justify-center bg-gradient-to-b from-blue-900 to-transparent">
      <Droplet className="w-8 h-8 text-secondary fill-blue-400" />
    </div>
  );
}
