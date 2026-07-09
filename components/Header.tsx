import Image from "next/image";
import Link from "next/link";

export default function Header() {

    return(
        <>
        <header className="flex flex-row max-[640px]:flex-col justify-between max-[640px]:justify-start items-center content-center gap-4 mb-2.5">
        <div className="relative w-[260px] h-[90px] min-[620px]:w-[240px] min-[620px]:h-[80px] max-[620px]:w-[200px] max-[620px]:h-[70px]">
            <Image className="object-cover" fill sizes="(max-width: 620px) 100vw, (max-width: 1100px) 70vw, 50vw" priority src="/thuxgn1000px.png" alt="logo" />
        </div>
        <div className="w-full max-[620px]:w-1/2 flex justify-end max-[620px]:justify-center items-center">
        <ul className="flex flex-row items-center gap-5 p-2.5 whitespace-nowrap justify-center">
            <li><Link target="_blank" href="https://payhip.com/thuxgn"><Image width={30} height={30} className="transition-transform duration-300 ease-out hover:scale-120" src="/store.png" alt="Shop"/></Link></li>
            <li><Link target="_blank" href="https://github.com/thuxgn"><Image width={30} height={30} className="transition-transform duration-300 ease-out hover:scale-120" src="/GitHub_Invertocat_Black.png" alt="Email" /></Link></li>
            <li><Link target="_blank" href="https://www.instagram.com/thuxgn/"><Image width={30} height={30} className="transition-transform duration-300 ease-out hover:scale-120" src="/instagram.png" alt="Instagram" /></Link></li>
            <li><Link target="_blank" href="https://www.tiktok.com/@thuxgn"><Image width={30} height={30} className="transition-transform duration-300 ease-out hover:scale-120" src="/tiktok.png" alt="TikTok" /></Link></li>
        </ul>
        </div>
        </header>
        </>
    );
}