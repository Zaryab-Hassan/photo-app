"use client"
import { Button } from '@/components/ui/button'
import { CldImage } from 'next-cloudinary'
import React, { useState } from 'react'

export default function EditPage({searchParams : {publicId}} : {searchParams : {publicId : string}}) {
  const [transformation , setTransformation] = useState<undefined | "generative" | "removebackground" | "pixelate" | "blur">(); 
  return (
<section className = "flex flex-col justify-start gap-5">
    <div className ="flex justify-between">
        <h1 className = "text-4xl font-bold">Edit {publicId}</h1>
    </div>
    <div className = "flex gap-4">
      <Button variant="secondary" onClick={()=>{setTransformation(undefined)}}>Clear</Button>
      <Button variant="secondary" onClick={()=>{setTransformation("generative")}}>Generative Fill</Button>
      <Button variant="secondary" onClick={()=>{setTransformation("removebackground")}}>Remove Background</Button>
      <Button variant="secondary" onClick={()=>{setTransformation("pixelate")}}>Pixelate</Button>
      <Button variant="secondary" onClick={()=>{setTransformation("blur")}}>Blur</Button>
    </div>
    <div className = "grid grid-cols-2 ">
      <CldImage 
      src = {publicId}
      width={250}
      height={300}
      alt='Editable Image'
      />
      {transformation === "generative" && 
      <CldImage 
      src = {publicId}
      width={250}
      height={300}
      alt='Editable Image'
      crop="pad"
      fillBackground
      />
      }
      {transformation === "removebackground" &&
       <CldImage 
       src = {publicId}
       width={250}
       height={300}
       alt='Editable Image'
       removeBackground
       /> 
      }
      {transformation === "blur" && 
      <CldImage 
      src = {publicId}
      width={250}
      height={300}
      alt='Editable Image'
      blur = "1200"
      />
      }
      {transformation === "pixelate" && 
      <CldImage 
      src = {publicId}
      width={250}
      height={300}
      alt='Editable Image'
      crop="pad"
      pixelate
      />
      }
    </div>
</section>
  )
}
