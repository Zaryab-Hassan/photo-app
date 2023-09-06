import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import logo from "public/camera.jpg"
  import { StaticImageData } from "next/image"
  
  export function Logo() {
    return (
      <Avatar>
        <AvatarImage src = "/public/camera.jpg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  