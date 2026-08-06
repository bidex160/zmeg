import {
  Scan, Wrench, Zap, Stamp, Hammer, Truck, Ship, TrainFront,
  ShieldCheck, DollarSign, Headphones,
} from "lucide-react";

// Maps the plain-string `icon` keys used in the data files to lucide icons,
// so data files stay framework-agnostic (no JSX/component references).
export const ICONS = {
  scan: Scan,
  wrench: Wrench,
  zap: Zap,
  stamp: Stamp,
  hammer: Hammer,
  truck: Truck,
  ship: Ship,
  train: TrainFront,
  shield: ShieldCheck,
  dollar: DollarSign,
  headset: Headphones,
};
