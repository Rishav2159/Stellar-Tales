import Particles from "@/components/ui/particles";
import Image from 'next/image'; 
import Link from 'next/link'; 
import { HyperText } from "@/components/ui/hypertext";

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-between h-full bg-black text-white">
      <div className="absolute w-full h-full">
        <Particles />
      </div>
      <div className="text-left z-10 h-auto absolute left-5 md:left-10 top-32 md:top-44 flex flex-col">
        <HyperText
          className="text-1xl text-wrap md:text-4xl font-bold text-white z-10 font-avenir bg-gradient-to-r from-gray-400 to-gray-700 inline-block text-transparent bg-clip-text"
          text="Tales from beyond the Stars!"
        />
      </div>
      <div className="z-10 h-auto absolute top-5 right-5 md:right-24 md:top-10">
        <Link href="/target-page" passHref>
          <div className="relative w-[80px] md:w-[100px] h-[80px] md:h-[100px] overflow-hidden rounded-full shadow-[0px_0px_60px_-15px_rgba(255,255,255,0.8)]">
            <Image 
              src="/moon.jpeg" 
              alt="Description of Image"
              width={600}
              height={600}
              className="rounded-full blur-xs grayscale" 
            />
          </div>
        </Link>
      </div>

      {/* New Image Section at the Bottom */}
      <div className="relative z-10 w-full h-full flex-grow overflow-hidden">
        <Image 
          src="/forest.png" 
          alt="Description of Lower Image"
          fill
          className="brightness-50 blur-xs object-cover" 
        />
      </div>
    </div>
  );
}
