import Image from 'next/image'

export default function LocationTitle() {
    return (
        <div className="w-full overflow-x-hidden flex justify-center select-none pointer-events-none">
            <Image
                src="/location/LocationTitle.svg"
                alt="Location Title"
                width={1920}
                height={640}
                className="w-[150%] max-w-none h-auto origin-center sm:w-full transition-all duration-300 xl:mb-12 select-none pointer-events-none"
                
            />
        </div>
    )
}