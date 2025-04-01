import React from 'react'

export default function Contianer({className,children}) {
  return (
    <div className={`w-full max-w-[1360px] mx-auto px-[20px] ${className}`}>
      {children}
    </div>
  )
}
