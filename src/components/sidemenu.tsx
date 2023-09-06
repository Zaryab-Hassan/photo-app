import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Gallery from './ui/icons/gallery'
import Folder from './ui/icons/folder'
import Heart from './ui/icons/heart'

export default function SideMenu () {
    return(
      <div className= "pb-12 w-1/6">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Manage
            </h2>
            <div className="space-y-1">
              <Button asChild variant="ghost" className="w-full justify-start gap-x-1">
              <Link href = "/gallery">
                    <Gallery/>
                Gallery
              </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start gap-x-1">
                <Link href = "/albums">
                    <Folder/>
                Albums
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start gap-x-1">
                <Link href = "/favorites">
                    <Heart/>
                Favorites
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
