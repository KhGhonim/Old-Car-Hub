import React from 'react'
import { IoMdClose } from "react-icons/io";

export default function FloatingAD() {
  return (
    <div className="fixed inset-x-0 bottom-0 p-4">
  <div
    className="relative flex items-center justify-between gap-4 rounded-lg bg-[--primary-color] px-4 py-3 text-[--font-color] shadow-lg"
  >
    <p className="text-sm font-medium">
      Love BMW or Audi?  
      <a href="#" className="inline-block underline">  Check out this new Cars Collection right away!</a>
    </p>

    <button
      aria-label="Close"
      className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/30"
    >
      <IoMdClose/>
    </button>
  </div>
</div>
  )
}
