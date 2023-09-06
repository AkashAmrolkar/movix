import React from 'react'

const ContentWrapper = ({children}) => {
  return (
    <div className='w-full container mx-auto px-5'>{children}</div>
  )
}

export default ContentWrapper