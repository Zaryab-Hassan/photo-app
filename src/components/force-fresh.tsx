"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'

const ForceRefresh = () => {
    const router = useRouter()
    useEffect(()=>{
        router.refresh();
    },[])
    return <></>
}

export default ForceRefresh