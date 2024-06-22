import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'

const Sidebar = () => {
  return (
    <div className='flex flex-col p-4 border-r border-primary'>
      <SearchInput></SearchInput>
      <div className=' divider px-3'></div>
      <Conversations></Conversations>
      
    </div>
  )
}

export default Sidebar