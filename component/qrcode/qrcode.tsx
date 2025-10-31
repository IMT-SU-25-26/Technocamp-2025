"use client";

import Image from "next/image";

export default function QRCode() {
  return (
    <div className="w-full py-8 overflow-hidden">
      {/* Banner QR Code */}
      <div className="relative mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <div className="relative w-full max-w-[60%] sm:max-w-[50%] md:max-w-[45%] lg:max-w-[40%] mx-auto">
          <Image
            src="/qrcode/titleqr.svg"
            alt="QR Code Banner"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Container untuk QR Code Box */}
      <div className="relative w-full max-w-[85%] sm:max-w-[70%] md:max-w-[55%] lg:max-w-[45%] xl:max-w-[35%] mx-auto px-4 sm:px-6">
        {/* Kotak QR Code dengan border dan gradient */}
        <div className="relative bg-gradient-to-br from-[#3d1f1f] via-[#2d1515] to-[#1d0d0d] rounded-lg overflow-hidden shadow-2xl border-4 border-white p-4 sm:p-6">
          {/* QR Code Container */}
          <div className="relative w-full h-auto bg-gradient-to-br from-[#3d1f1f] via-[#2d1515] to-[#1d0d0d] rounded-md overflow-hidden">
            <div className="w-full aspect-square p-3 sm:p-4">
              <Image
                src="/qrcode/qrcode.svg"
                alt="QR Code"
                width={500}
                height={500}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
