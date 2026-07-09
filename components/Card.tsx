"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Card(params: { videourl: string, alttext: string, caption: string }) {
    const [thumbnail, setThumbnail] = useState("/loading.gif");

    const apiUrl = `https://www.tiktok.com/oembed?url=${params.videourl}`;

    useEffect(() => {
        const fetchThumbnail = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setThumbnail(data.thumbnail_url);
            } catch (error) {
                console.error("Error fetching thumbnail:", error);
            }
        };
        fetchThumbnail();
    }, [apiUrl]);

    return (
        <figure className="w-full">
            <Link target="_blank" href={params.videourl} className="relative block w-full aspect-square  overflow-hidden">
                <Image className="hover:scale-102 transition-transform duration-300 ease-out aspect-square object-cover rounded-[10px] mb-0"
                    fill
                    sizes="(max-width: 620px) 100vw, (max-width: 1100px) 50vw, 25vw"
                    src={thumbnail} 
                    loading="eager"
                    unoptimized
                    alt={params.alttext}>
                </Image>
            </Link>
        <figcaption className="mt-[10px] text-[14px] text-[#555] text-center font-[Arial] font-bold">{params.caption}</figcaption>
    </figure>
    );
}

