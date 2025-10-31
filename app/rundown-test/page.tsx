"use client";

import Rundown from "@/component/rundown/rundown";
import QRCode from "@/component/qrcode/qrcode";

export default function RundownTest() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0f0a] via-[#3a1a0a] to-[#110606] text-white">
      <div className="bg-gradient-to-t from-[#2c0f0f]/80 via-[#401b0b]/70 to-transparent">
        <Rundown />
        <QRCode />
      </div>
    </div>
  );
}
