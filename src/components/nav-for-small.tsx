import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import React, { useState } from 'react'
import { Button } from './ui/button'
import Menu from './ui/icons/menu';
import Link from 'next/link';

export default function NavButtonn() {
    const [open , setOpen] = useState("false");
  return (
    <div>
              <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className = "w-6 h-6 p-0"><Menu/></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36">
            <DropdownMenuItem asChild>
                <Link href = "/gallery">
                </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
                <Link href = "/albums">

                </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
                <Link href = "/favorites">
                    
                </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
