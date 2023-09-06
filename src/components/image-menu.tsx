import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Menu from "./ui/icons/menu"
import { AlbumDialog } from "./add-to-album"
import { SearchResult } from "@/app/gallery/page"
import { useState } from "react"
import Link from "next/link"
import { Pencil } from "lucide-react"
  
  export function ImageMenu({image}:{image:SearchResult}) {

    const [open , setOpen] = useState(false) 
    return (
        <div className = "absolute top-2 right-2">
      <DropdownMenu open = {open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className = "w-6 h-6 p-0"><Menu/></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36">
            <DropdownMenuItem asChild>
              <AlbumDialog image = {image} onOpen = {()=>{setOpen(false)}}/>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href = {`/edit?publicId=${encodeURIComponent(image.public_id)}`} className = "flex items-center">
            <Pencil className = "w-4 h-4 mr-2 ml-4"/>
              Edit
              </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    )
  }
  