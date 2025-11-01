import Image from "next/image";

type FrameImageProps = {
    backgroundImgUrl: string;
    titleImgUrl: string;
    mainImgUrl: string;
    bottomElement?: React.ReactNode;
};

export default function FrameImage(
    {
        backgroundImgUrl, 
        titleImgUrl,
        mainImgUrl,
        bottomElement
    }:  FrameImageProps
) {
    return(
        <>
            <div className="w-full overflow-x-hidden flex justify-center mx-auto mt-10 mb-10 xl:mb-12 relative max-w-[50rem] select-none">
                <Image
                    src={backgroundImgUrl}
                    alt="Background"
                    className="w-[90vw] select-none pointer-events-none"
                    width={100}
                    height={100}
                />
                <Image
                    src={titleImgUrl}
                    alt="Title"
                    className="absolute top-[15.5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[16%] w-auto select-none pointer-events-none"
                    width={100}
                    height={100}
                />
                <Image
                    src={mainImgUrl}
                    alt="Title"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[57%] w-auto"
                    width={100}
                    height={100}
                />
                <div className="absolute bottom-[10%] md:bottom-[11%]">
                    {bottomElement}
                </div>
            </div>
        </>
    );
}