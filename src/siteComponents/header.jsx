import React from 'react'

const Header = ({subtitle}) => {
  return (
    <header>
        <div className='grid grid-cols-12 mb-48'>
            <div className='col-span-2 col-start-2'>
            <p className='font-bold text-2xl mt-2'>Logo</p>
            </div>
            <div className='col-span-6 col-start-6'>
                <p className='mt-4 text-red-500 italic'>{subtitle}</p>
            </div>
        </div>
    </header>
  )
}

export default Header