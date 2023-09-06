import React from 'react'
import { Logo } from './ui/icons/logo'
import logo from "public/camera.jpg"
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="border-b py-3">
      <div className = "flex items-center">
        <Image className = "rounded-full mr-2" src = {logo} alt = "" width={50} height={50}/>
        <h1 className = "text-2xl font-bold">Photo App</h1>
      </div>
        
    </div>
  )
}
