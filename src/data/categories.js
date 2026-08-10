// Product catalog data for ZMEG — 5 categories, 18 models
import ZMEGFreeScanUENovalogo from './../assets/products/ZMEG FreeScan UE Nova.png'
import ZMEGFreeScanUENovalogo1 from './../assets/products/ZMEG FreeScan UE Nova-1.png'
import VPG2 from './../assets/products/VPG-2.png'
import ZMEGFreeScanUEPro2 from './../assets/products/ZMEG FreeScan UE Pro2.png'
import ZMEGFreeScanUEPro22 from './../assets/products/ZMEG FreeScan UE Pro2-2.png'
import ZMEGFreeScanUEPro from './../assets/products/ZMEG FreeScan UE Pro.png'
import ZMEGFreeScanUEPro1 from './../assets/products/ZMEGFreeScanUEPro-1.png'
import ZMEGFreeScanUEPro23 from './../assets/products/ZMEGFreeScanUEPro-2.jpg'
import ZMEGOptimScanQ12Q9 from './../assets/products/ZMEG OptimScan Q12 _ Q9.png'
import ZMEGOptimScanQ12Q91 from './../assets/products/ZMEG OptimScan Q12 _ Q9-1.png'
import ZMEGOptimScanQ12Q92 from './../assets/products/ZMEGOptimScanQ12Q92.webp'
import CNCRouter1 from './../assets/products/CNC Router1.png'
import CNCRouter2 from './../assets/products/CNC Router2.png'
import CNCRouter3 from './../assets/products/CNC Router3.png'
import CNCRouter4 from './../assets/products/CNC Router4.png'
import CNCRouter5 from './../assets/products/CNC Router5.png'
import CNCRouter6 from './../assets/products/CNC Router6.png'
import CNCRouter7 from './../assets/products/CNC Router7.png'
import CNCRouter8 from './../assets/products/CNC Router8.png'
import CNCRouter9 from './../assets/products/CNC Router9.png'

import FiberLaserCuttingMachine1 from './../assets/products/Fiber Laser Cutting Machine1.png'
import FiberLaserCuttingMachine2 from './../assets/products/Fiber Laser Cutting Machine2.png'
import FiberLaserCuttingMachine3 from './../assets/products/Fiber Laser Cutting Machine3.png'
import FiberLaserCuttingMachine4 from './../assets/products/Fiber Laser Cutting Machine4.png'
import FiberLaserCuttingMachine5 from './../assets/products/Fiber Laser Cutting Machine5.png'
import FiberLaserCuttingMachine6 from './../assets/products/Fiber Laser Cutting Machine6.png'
import FiberLaserCuttingMachine7 from './../assets/products/Fiber Laser Cutting Machine7.png'
import FiberLaserCuttingMachine8 from './../assets/products/Fiber Laser Cutting Machine8.png'

import DScanners1 from './../assets/products/3D Scanners1.png'
import DScanners2 from './../assets/products/3D Scanners1.png'
import DScanners3 from './../assets/products/3D Scanners1.png'


import WoodLatheMachine1 from './../assets/products/Wood Lathe Machine1.png'
import WoodLatheMachine2 from './../assets/products/Wood Lathe Machine2.png'
import WoodLatheMachine3 from './../assets/products/Wood Lathe Machine3.png'
import WoodLatheMachine4 from './../assets/products/Wood Lathe Machine4.png'
import WoodLatheMachine5 from './../assets/products/Wood Lathe Machine5.png'
import WoodLatheMachine6 from './../assets/products/Wood Lathe Machine6.png'
import WoodLatheMachine7 from './../assets/products/Wood Lathe Machine8.png'
import WoodLatheMachine8 from './../assets/products/Wood Lathe Machine8.png'
import WoodLatheMachine9 from './../assets/products/Wood Lathe Machine9.png'


import LaserMarkingMachine1 from './../assets/products/Laser Marking Machine1.png'
import LaserMarkingMachine2 from './../assets/products/Laser Marking Machine2.png'
import LaserMarkingMachine3 from './../assets/products/Laser Marking Machine3.png'
import LaserMarkingMachine4 from './../assets/products/Laser Marking Machine4.png'
import LaserMarkingMachine5 from './../assets/products/Laser Marking Machine5.png'
import LaserMarkingMachine6 from './../assets/products/Laser Marking Machine6.png'
import LaserMarkingMachine7 from './../assets/products/Laser Marking Machine7.png'


export const CATEGORIES = [
  {
    slug: "3d-scanners",
    name: "ZMEG 3D scanner",
    short: "Metrology & Reverse Engineering",
    icon: "scan",
    blurb: "Precision handheld and fixed 3D free Scanning systems for inspection, quality control and reverse engineering.",
    products: [
      {
        id: "gc-hs-hw",
        name: "ZMEG GC-HS / GC-HW Portable Handheld FreeScan",
        tagline: "High speed, high precision, good price",
        image: DScanners1,
        gallery: [
         DScanners1,
          // "https://www.goodcutcnc.com/Uploads/6195ada33d3045800.jpg",
          // "https://www.goodcutcnc.com/Uploads/6195ada33da755068.jpg",
          // "https://www.goodcutcnc.com/Uploads/6195ada33e1bf9529.jpg",
        ],
        bullets: ["Handheld FreeScan", "GC-HS / GC-HW models", "Good price", "High speed"],
        description: "A portable handheld FreeScan built for fast, high-precision digitizing of engine and mechanical parts. Two working modes cover both wide-area capture and fine detail work, with color texture support and a full mesh-processing software suite.",
        specs: [
          ["Range of view", "GC-HS: 250mm (Std) / 100mm (Fine) — GC-HW: 400mm (Std) / 150mm (Fine)"],
          ["Point distance", "GC-HS: 0.25 / 0.12mm — GC-HW: 0.5 / 0.15mm"],
          ["Accuracy", "GC-HS: 0.1 / 0.04mm — GC-HW: 0.15 / 0.05mm"],
          ["Scan volume", "100 ~ 2500mm"],
          ["Scanning speed", "Non-contact, 1,000,000 points/s"],
          ["Interface / voltage", "USB 3.0, 5A / 100–240V 60Hz"],
          ["Certification", "CE / FCC / WEEE / CNAS"],
        ],
      },
      {
        id: "freescan-trak-nova",
        name: "ZMEG FreeScan Trak Nova",
        tagline: "Wireless multi-functional dynamic tracking & scanning system",
        image: ZMEGFreeScanUENovalogo,
        gallery: [
         ZMEGFreeScanUENovalogo,
        VPG2,
        ],
        bullets: ["Integrated Video Photogrammetry (VPG)", "Flexible & separable system", "Compact, agile dynamic tracking", "Wireless & lightweight"],
        description: "Small in form, big on performance. From construction machinery to rail transit, civil aviation to energy, Trak Nova is built for accurate, efficient large-scale measurement with extreme portability. It includes a detachable handheld scanner (also usable standalone) with the largest field of view in its class.",
        specs: [
          ["Detachable scanner", "Doubles as a standalone handheld laser scanner"],
          ["FOV", "Up to 2.6 × 2.2 m"],
          ["Positioning", "Patented Video Photogrammetry (VPG) — no coded markers"],
          ["Batteries", "Swappable / hot-swap for continuous operation"],
          ["Weight", "TE Nova: 1.2kg — UI Nova: 1.6kg"],
          ["Connectivity", "Fully wireless, integrated computing modules"],
        ],
      },
      {
        id: "freescan-ue-nova",
        name: "ZMEG FreeScan UI Nova",
        tagline: "Wireless metrology free Scanner for greater reach",
        image: "https://www.shining3d.com/hubfs/FreeScan%20UE%20Nova%20-%20Scanning%20Pipeline.png",
        gallery: [
          "https://www.shining3d.com/hubfs/FreeScan%20UE%20Nova%20-%20Scanning%20Pipeline.png",
          "https://www.shining3d.com/hs-fs/hubfs/FOV-2.png",
         ZMEGFreeScanUENovalogo1,
          "https://www.shining3d.com/hs-fs/hubfs/VPG-2.png",
        ],
        bullets: ["Extra-large FOV of 2.6 × 2.2 m", "Ultra-fast scan speed", "Integrated Video Photogrammetry (VPG)", "Complete wireless"],
        description: "Sets a new standard in 3D scanning with its unmatched field of view, enabling highly efficient capture of large objects and significantly enhancing portability, productivity and versatility. Three selectable working ranges adapt the scanner to tight spaces or very large parts.",
        specs: [
          ["FOV", "Up to 2600 × 2200mm"],
          ["Working ranges", "Near 300–800mm / Standard 600–1500mm / Far 1200–2600mm"],
          ["Accuracy", "0.072mm"],
          ["Volumetric accuracy (VPG)", "0.072 + 0.012 mm/m"],
          ["Scan speed", "4,600,000 points/s"],
          ["Weight", "1.6 kg"],
          ["Certifications", "CE, FCC, ROHS, WEEE, KC, FDA, UKCA, IP50, TELEC, TISAX"],
        ],
      },
      {
        id: "freescan-ue-pro2",
        name: "ZMEG FreeScan UI Pro2",
        tagline: "Wireless multifunctional laser handheld free Scanner",
        image: ZMEGFreeScanUEPro2,
        gallery: [
          ZMEGFreeScanUEPro2,
          ZMEGFreeScanUEPro22,
          "https://www.shining3d.com/hs-fs/hubfs/%E6%96%B0%E7%BD%91%E9%A1%B5%E9%85%8D%E5%9B%BE-271.png",
        ],
        bullets: ["Wireless, 950g", "Scan speed up to 3,460,000 pts/s", "Video Photogrammetry (VPG)", "Quick on-site inspection"],
        description: "Doubles scanning efficiency over the previous generation with an embedded computing module and 50 laser lines. Three scanning functions — high-speed, detail, and deep-hole — cover everything from flat sheet metal to tight pockets.",
        specs: [
          ["Scan modes", "High-speed 50 lines / Detail 7 lines / Deep-hole 1 line"],
          ["Scan speed", "3,460,000 points/s"],
          ["Accuracy", "0.02mm"],
          ["Volumetric accuracy (VPG)", "0.02mm + 0.015mm/m"],
          ["Weight", "950g"],
          ["Certifications", "CE, FCC, ROHS, WEEE, KC, FDA, UKCA, IP50, TELEC, TISAX"],
        ],
      },
      {
        id: "freescan-ue-pro",
        name: "ZMEG FreeScan UI Pro",
        tagline: "Metrology-grade laser handheld free Scanner · Reddot 2024 winner",
        image: ZMEGFreeScanUEPro,
        gallery: [
          ZMEGFreeScanUEPro,
         ZMEGFreeScanUEPro1,
         ZMEGFreeScanUEPro23
        ],
        bullets: ["Accuracy of 0.02mm with markers", "Speed up to 1,850,000 pts/s", "3 scanning modes + built-in photogrammetry", "Reddot Award 2024"],
        description: "Inherits the high-precision, lightweight design of the FreeScan UE series while adding global precision control for large-scale workpieces. Designated as the official scanner for the Additive Manufacturing skill at WorldSkills Competitions.",
        specs: [
          ["Scan modes", "26 laser lines / 7 laser lines / 1 single line"],
          ["Scan speed", "1,850,000 points/s"],
          ["Accuracy", "0.02mm"],
          ["Volumetric accuracy", "0.02 + 0.015 mm/m (with photogrammetry)"],
          ["Max FOV", "600 × 550mm"],
          ["Weight", "840g"],
        ],
      },
      {
        id: "optimscan-q12-q9",
        name: "ZMEG OptimScan X17",
        tagline: "High-precision fixed 3D inspection scanners",
        image: ZMEGOptimScanQ12Q9,
        gallery: [
          ZMEGOptimScanQ12Q9,
          ZMEGOptimScanQ12Q91,
         ZMEGOptimScanQ12Q92
        ],
        bullets: ["Dual scan range", "Monocular-Stereo Fusion (MSF)", "Multiple exposure", "Single shot under 1 second"],
        description: "Four high-resolution cameras and a built-in dual-chip computing module deliver dense, high-accuracy point clouds in under a second per shot. Switch scan ranges with a single click — no manual aperture or focal adjustment.",
        specs: [
          ["Scan ranges", "Large 430 × 300mm / Small 160 × 110mm"],
          ["Accuracy", "Large range 0.015mm — Small range 0.005mm"],
          ["Resolution", "Q12: 4 × 12.3MP — Q9: 4 × 9MP"],
          ["Light source", "Blue LED"],
          ["Weight", "3.5 kg"],
          ["Acceptance test", "VDI/VDE 2634 Part 2 & ISO 10360"],
        ],
      },
    ],
  },
  {
    slug: "cnc-router",
    name: "CNC Router",
    short: "Wood, Foam & 3-Axis / 5-Axis Machining",
    icon: "wrench",
    blurb: "Heavy-frame CNC routers with automatic tool change and multi-axis spindles for wood, foam, and mould work.",
    products: [
      {
        id: "gc1325atc-4axis",
        name: "ZMEG GC1325ATC 4-Axis Strong Frame CNC Router",
        tagline: "Big size, rotated ATC spindle for 3D engraving",
        image: CNCRouter1,
        gallery: [
          CNCRouter1,
          CNCRouter2,
          CNCRouter3
        ],
        bullets: ["Linear ATC device", "180° rotated spindle", "High Z axis", "Sunk table"],
        description: "A heavy-duty, weld-steel frame router with a 10/12-piece linear tool magazine and a 9kW rotated spindle for true 3D engraving. Servo-driven on every axis with Taiwan HIWIN rails for long-term accuracy under continuous production.",
        specs: [
          ["Working area", "1300×2500mm / 1500×3000mm / 2000×3000mm"],
          ["Spindle", "10kW HITECO 5-axis spindle"],
          ["Control system", "Taiwan Syntec"],
          ["X/Y structure", "Taiwan guide rail, #40 ball screw"],
          ["Motor & driver", "Leadshine / Taiwan Delta / Yaskawa servo"],
          ["Options", "Swing head, rotary device, ATC"],
        ],
      },
      {
        id: "gc1325atc-caxis",
        name: "ZMEG GC1325ATC C-Axis",
        tagline: "HSD aggregate ATC router with automatic tool changer",
        image: CNCRouter4,
        gallery: [
          CNCRouter4,
          CNCRouter5,
          CNCRouter6
        ],
        bullets: ["C-axis for drilling", "9kW spindle", "Taiwan Syntec controller", "Linear 10pcs tool magazine"],
        description: "Built around an Italian HSD aggregate head that rotates a full 180°, this router handles milling, boring and drilling in addition to standard ATC engraving — with a 10-piece linear magazine keeping changeovers fast.",
        specs: [
          ["Working area", "1300×2500×200mm"],
          ["Spindle", "9kW air-cooled with C-axis ATC"],
          ["Control system", "Taiwan Syntec 60W-E"],
          ["Motor", "Yaskawa 850W servo, C-axis 400W"],
          ["Tool magazine", "Linear, 10pcs incl. 2 angle-head holders"],
          ["Table", "Vacuum table, 8-zone adsorption"],
        ],
      },
      {
        id: "gc1325-5axis-400z",
        name: "ZMEG GC1325 5-Axis Wood/Foam/EPS Router",
        tagline: "400mm Z-axis for deep 3D sculpture and mould work",
        image: CNCRouter7,
        gallery: [
          CNCRouter7,
          CNCRouter8,
          CNCRouter9
        ],
        bullets: ["ATC CNC router", "True 5-axis machine", "Automatic tool changer", "400mm Z-axis"],
        description: "Designed for complex three-dimensional workpieces — auto foam moulds, wooden ship and aviation moulds, and large sculptural forms — with an integrated cast structure and a heightened Z-axis for deep-relief cutting.",
        specs: [
          ["Working size", "1300×2500×400mm / 1500×3000×400mm / 2000×3000×400mm"],
          ["Spindle", "5-axis DEMAS head, 10kW HITECO"],
          ["Control system", "Taiwan Syntec, 5-axis + ATC"],
          ["Guide rails", "Taiwan HIWIN #35 linear guide, TBI ball screw"],
          ["Table surface", "T-slot table"],
          ["Rotary clamp", "Ø600 × 2500mm"],
        ],
      },
    ],
  },
  {
    slug: "fiber-laser-cutting",
    name: "Fiber Laser Cutting Machine",
    short: "Metal Sheet & Plate Cutting",
    icon: "zap",
    blurb: "High-speed fiber laser cutting systems for stainless steel, carbon steel, aluminum and copper.",
    products: [
      {
        id: "gc1530f-highquality",
        name: "ZMEG GC1530F Fiber Laser Cutting Machine",
        tagline: "For cutting stainless steel & carbon steel",
        image: FiberLaserCuttingMachine1,
        gallery: [
         FiberLaserCuttingMachine1,
         FiberLaserCuttingMachine2,
         FiberLaserCuttingMachine3,
        ],
        bullets: ["Control system: Cypcut", "Laser power 1kW–12kW", "Raycus / MAX / IPG source", "Japan Fuji / Yaskawa servo"],
        description: "A heavy industrial-steel-structure cutting bed with a France Schneider servo system and Japan THK linear rail, tuned for continuous multi-shift production of sheet metal parts.",
        specs: [
          ["Working area", "1500×3000mm"],
          ["Laser power", "1500W / 2000W / 3000W / 6000W / 12000W"],
          ["Laser source", "Raycus / IPG / MAX"],
          ["Controller", "Cypcut"],
          ["Repeated positioning accuracy", "0.03mm"],
          ["Max moving speed", "80m/min"],
        ],
      },
      {
        id: "gc1530f-newdesign",
        name: "ZMEG GC1530F New Design Fiber Laser Cutting Machine",
        tagline: "For SS / CS cutting",
        image: FiberLaserCuttingMachine4,
        gallery: [
             FiberLaserCuttingMachine4,
         FiberLaserCuttingMachine5,
         FiberLaserCuttingMachine6,
        ],
        bullets: ["Control system: Cypcut", "Laser power 1kW–12kW", "Raycus / MAX / IPG source", "Japan Fuji / Yaskawa servo"],
        description: "An updated frame and cabling layout on ZMEG's proven 1500×3000mm cutting platform, with the same industrial-grade drive train and a Raytools cutting head for fast, clean perforation on thick plate.",
        specs: [
          ["Working area", "1500×3000mm"],
          ["Laser power", "1500W / 2000W / 3000W / 6000W / 12000W"],
          ["Laser source", "Raycus / IPG / MAX"],
          ["Controller", "Cypcut"],
          ["Transmission", "Rack and gear, double drive on Y-axis"],
          ["Power consumption", "<10kW"],
        ],
      },
      {
        id: "gc1530f-independent-cabinet",
        name: "ZMEG GC1530F Fiber Laser Cutting Machine, Independent Cabinet",
        tagline: "For SS / CS / MS / Al / Cu cutting",
        image:   FiberLaserCuttingMachine7,
        gallery: [
           FiberLaserCuttingMachine7,
         FiberLaserCuttingMachine8,
        ],
        bullets: ["1500×3000mm bed", "Raycus / Max / IPG laser source", "Raytools laser head", "Independent electrical cabinet"],
        description: "Keeps the control electronics in a separate, sealed cabinet away from cutting dust and heat — extending component life on high-duty-cycle production lines cutting a mix of metals.",
        specs: [
          ["Working area", "1500×3000mm"],
          ["Laser power", "1000W / 1500W / 2000W / 3000W / 4000W"],
          ["Laser source", "Raycus / IPG / MAX"],
          ["Controller", "Cypcut"],
          ["Motor driver", "Japan Fuji servo (Yaskawa optional)"],
          ["Independent cabinet", "Yes"],
        ],
      },
    ],
  },
  {
    slug: "laser-marking",
    name: "Laser Marking Machine",
    short: "Metal & Nonmetal Permanent Marking",
    icon: "stamp",
    blurb: "Fiber laser marking systems for barcodes, serial numbers, and traceability marking on metal and plastic.",
    products: [
      {
        id: "gc1010-wholecover",
        name: "ZMEG Whole Cover Fiber Laser Marking Machine GC1010",
        tagline: "Enclosed cabinet marking station",
        image: LaserMarkingMachine1,
        gallery: [
         LaserMarkingMachine1,
         LaserMarkingMachine2,
         LaserMarkingMachine3,
        ],
        bullets: ["Marking size 110×110mm", "20W / 30W / 50W laser power", "Raycus / Germany IPG source", "Metal + part nonmetal"],
        description: "A fully enclosed fiber laser marking station for barcodes, serial numbers, 2D data matrix codes and graphics — with an imported isolator protecting the laser generator and extending service life.",
        specs: [
          ["Work area", "110×110mm up to 500×500mm"],
          ["Power", "20W / 30W / 50W / 100W"],
          ["Work precision", "±0.01mm"],
          ["Software", "EZCAD"],
          ["Min line width", "0.017mm"],
          ["Marking depth", "0.01–1.0mm (material dependent)"],
        ],
      },
      {
        id: "belt-conveyor-flying",
        name: "ZMEG Belt Conveyor Flying Marking Machine",
        tagline: "In-line marking for moving production",
        image: LaserMarkingMachine4,
        gallery: [
         LaserMarkingMachine4,
         LaserMarkingMachine5,
         LaserMarkingMachine6
        ],
        bullets: ["Marking area up to 300×300mm", "Fiber 10–50W / CO2 80–100W", "IPG / Raycus / MAX source", "All metal + part plastic"],
        description: "Flying-mark laser printer built into a belt conveyor line, for date codes and batch numbers on parts moving at production speed — zero consumables, zero ink, and no contact wear.",
        specs: [
          ["Marking area", "70×70 / 110×110 / 175×175 / 200×200mm"],
          ["Laser power", "Fiber 20W/30W/50W, CO2 80W/100W"],
          ["Repeat frequency", "1KHz–1000KHz"],
          ["Marking depth", "0.01–0.5mm"],
          ["Operating voltage", "110–240V / 50–60Hz"],
          ["Cooling", "Air cooling"],
        ],
      },
      {
        id: "desktop-fiber-gc1010",
        name: "ZMEG Desktop Fiber Marking Machine GC1010",
        tagline: "Compact benchtop marking station",
        image: LaserMarkingMachine7,
        gallery: [LaserMarkingMachine7],
        bullets: ["Marking size 110×110mm", "20W / 30W / 50W laser power", "Raycus / Germany IPG source", "Metal + part nonmetal"],
        description: "A benchtop marking system for workshops and QA stations needing traceability marks without a full production line — same beam quality and precision as ZMEG's industrial marking machines in a compact footprint.",
        specs: [
          ["Marking scope", "110×110mm up to 300×300mm"],
          ["Power", "20W / 30W / 50W / 100W"],
          ["Repeated accuracy", "0.0025mm"],
          ["Marking speed", "≤7000mm/s"],
          ["Marking depth", "0.01–0.2mm"],
          ["Power supply", "220V / 50Hz / 500W"],
        ],
      },
    ],
  },
  {
    slug: "wood-lathe",
    name: "Wood Lathe Machine",
    short: "CNC Wood Turning",
    icon: "hammer",
    blurb: "CNC wood turning lathes for table legs, stair balusters, baseball bats and cylindrical furniture parts.",
    products: [
      {
        id: "gc1530wl-s",
        name: "ZMEG GC1530WL-S Wood Turning Lathe",
        tagline: "Screw lathe spindle",
        image: WoodLatheMachine1,
        gallery: [
          WoodLatheMachine1,
          WoodLatheMachine2,
          WoodLatheMachine3,
        ],
        bullets: ["1500mm length, 300mm diameter", "Double cutter", "Fuling inverter", "Turning-screw spindle"],
        description: "A single-axis, double-cutter wood lathe with a turning-screw spindle that engraves right after lathing — built on Germany ball screw and Taiwan PMI guide rail for long service life on table legs and balusters.",
        specs: [
          ["Working length", "1500mm (2000 / 2500mm optional)"],
          ["Turning diameter", "300mm"],
          ["Cutters", "2 (1 rough, 1 finishing)"],
          ["Engraving spindle", "3.5kW, ER25, air-cooled"],
          ["Control system", "DSP with handle + USB"],
          ["Machine weight", "1600kg"],
        ],
      },
      {
        id: "gc1530wl-ds",
        name: "ZMEG GC1530WL-DS Double Axis CNC Wood Turning Lathe",
        tagline: "Turning + engraving spindle",
        image: WoodLatheMachine4,
        gallery: [
         WoodLatheMachine4,
         WoodLatheMachine5,
         WoodLatheMachine6,
        ],
        bullets: ["1500mm length, 300mm dia (custom 400mm)", "Double cutter, 2-axis", "YAKO inverter", "Ball screw X/Z, gear Y"],
        description: "Two cutters working synchronously in a layered process for higher throughput on repeat parts, with a heavy cast-iron bed to keep the spindle stable at speed and a DSP handle controller that skips the need for a PC.",
        specs: [
          ["Max diameter", "300mm (custom 400mm)"],
          ["Max length", "1500mm (custom 2000mm)"],
          ["Spindle speed", "0–3000 r/min"],
          ["Guide rail", "Taiwan HIWIN 25mm linear square rail"],
          ["Transmission", "Rack & pinion + Taiwan TBI ball screw"],
          ["Machine weight", "1600kg"],
        ],
      },
      {
        id: "gc1530wl-af",
        name: "ZMEG GC1530WL-AF Auto Feeding Industrial Wood Turning Lathe",
        tagline: "Automatic feeding for mass production",
        image: WoodLatheMachine7,
        gallery: [
         WoodLatheMachine7,
         WoodLatheMachine8,
         WoodLatheMachine9,
        ],
        bullets: ["Full automatic feeding", "Single axis, turning + engraving spindle", "Ball screw X/Z, gear Y", "High-speed lathe cutter"],
        description: "Automatic timber loading and centering removes the manual handling step entirely, making this the lathe of choice for runs of identical parts — staircase balusters, baseball bats, or table legs — at production scale.",
        specs: [
          ["Max diameter", "300mm"],
          ["Max length", "1500mm"],
          ["Feeding range", "Ø30–100mm, length 200–1200mm"],
          ["Spindle speed", "0–3500 r/min"],
          ["Guide rail", "Taiwan HIWIN 25mm w/ flange slider"],
          ["Accuracy", "0.001mm"],
        ],
      },
    ],
  },
];
