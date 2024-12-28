'use client'

import { useState, useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'


interface BgVideoProps {
    
    video: string
    videoWidth: number
    videoHeight: number
    loop: boolean
    autoPlay:boolean
    muted: boolean
  }
  
  export default function BgVideo({
    
    video,
    videoWidth,
    videoHeight,
    loop,
    autoPlay, 
    muted 

  }: BgVideoProps) {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    
    return (
        

<div className = 'bgVideo'>
             <video ref={videoRef}  className="opacity-50" style={{ opacity: 0.5 }} width={videoWidth} height={videoHeight} loop={true} autoPlay={true} muted= {true} >
             <source src={video} type="video/mp4" />
             
             </video>
        </div>
    
  

    )
}
