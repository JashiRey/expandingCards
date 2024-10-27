"use client"

import { useState, useRef } from "react"

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [images, setImages] = useState([
    {
      src: "/images/image1.jpg",
    },
    {
      src: "/images/image2.jpeg",
    },
    {
      src: "/images/image3.jpg",
    },
    {
      src: "/images/image4.png",
    },
    {
      src: "/images/image5.jpg",
    },
  ])

  return (
    <div className='flex flex-col gap-4 bg-black h-screen'>
      <div className='grid place-content-center pt-2 text-white'>
        <AddButton setImages={setImages} />
      </div>
      <main className='flex-1 flex justify-even items-stretch max-sm:flex-col  p-1 max-sm:overflow-hidden'>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedImage(index)
            }}
            style={{
              backgroundImage: `url(${image.src})`,
              flex: selectedImage === index ? " 5" : "1",
            }}
            className={`
          rounded-lg bg-cover m-2 bg-center transition-all duration-500 
            
            `}
          />
        ))}
      </main>
    </div>
  )
}



const AddButton = ({ setImages }) => {
  const inputRef = useRef(null)
  const handleAddImage = newImageUrl => {
    if (newImageUrl) {
      setImages(prev => [...prev, { src: newImageUrl }])
      inputRef.current.value = ""
    }
  }

  // truthy: 1, "1", true, "true", {}, []
  // falsy: 0, "0", false, "false", null, undefined, NaN, ""
  // if(truthy) => true
  // if(falsy) => false

  return (
    <div className='flex gap-2 items-center pt-2'>
      <label htmlFor='url' className='text-white'>
        <span>URL</span>
      </label>
      <input
        ref={inputRef}
        type='text'
        className='text-white rounded-md border border-white bg-gray-900'
      />
      <button
        onClick={() => {
          handleAddImage(inputRef.current.value)
        }}
        className='text-white border border-white rounded-md p-1'>
        Add
      </button>
    </div>
  )
}
