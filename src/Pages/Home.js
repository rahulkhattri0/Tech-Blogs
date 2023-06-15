import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div>
        <Header/>
        <div className='flex flex-col w-[630px] mt-20 mx-auto mb-20'>
          <Blogs/>
        </div>
        <Pagination/>
    </div>
  )
}

export default Home