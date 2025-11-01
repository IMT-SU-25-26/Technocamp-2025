import Link from "next/link";
import FrameImage from "./FrameImage";
import LocationTitle from "./LocationTitle";

export default function LocationSection() {
  return (
    <>
      <LocationTitle />

      <FrameImage
        backgroundImgUrl="/location/BGFrameImage.svg"
        titleImgUrl="/location/LokasiKumpul.svg"
        mainImgUrl="/location/corepreneur.png"
        bottomElement={
          <>
            <p className="text-md sm:text-2xl md:text-3xl"> Open Gate: 06.45</p>
          </>
        }
      />
      
      <FrameImage
        backgroundImgUrl="/location/BGFrameImage.svg"
        titleImgUrl="/location/LokasiCampJurusan.svg"
        mainImgUrl="/location/ayannahotel.png"
        bottomElement={
          <>
            <Link href="https://maps.app.goo.gl/RCUCRXCw32gVeWmu9" className="text-md sm:text-2xl md:text-3xl"> Maps to Arayanna</Link>
          </>
        }
      />
    </>    
  );
}
