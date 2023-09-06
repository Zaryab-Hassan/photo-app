"use client"
import { CldImage } from "next-cloudinary"
import { useState, useTransition } from "react";
import FullHeart from "./ui/full-heat";
import { SearchResult } from "@/app/gallery/page";
import setAsFavorite from "@/app/gallery/action";
import { ImageMenu } from "./image-menu";

export default function CloudinaryImages (props : any & {imageData : SearchResult}) {

    // const isFavorited = props.imageData.tags.includes('favorite');
    const [isFavorited ,setIsFavorited] = useState(props.imageData.tags.includes('favorite'));
    const [transition , startTransition] = useTransition();
    const {imageData} = props;

    return (
        <div className = "relative">
            <CldImage 
            {...props}
            />
            {isFavorited?
                <FullHeart
                onClick={() => {
                    startTransition(()=>{
                        setIsFavorited(false);
                        setAsFavorite(imageData.public_id , true);
                    })
                }}
                className = "absolute top-2 left-2 cursor-pointer text-red-500"/>
                :
                <FullHeart
                onClick={() => {
                    startTransition(()=>{
                        setIsFavorited(true);
                        setAsFavorite(imageData.public_id , false);
                    })
                }}
                className = "absolute top-2 left-2 cursor-pointer hover:text-red-500 text-white"/>
            } 
            <ImageMenu image = {imageData}/>
        </div>
    )
}