import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import { useLocation, useNavigate } from 'react-router-dom'
const CategoryPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    console.log("path")
    console.log(location.pathname)
    console.log(location.search)
  return (
    <div>
        <Header/>
        <div className='flex flex-col w-[630px] mt-20 mx-auto mb-20'>
            <div className='flex gap-x-3'>
                <button className='rounded-md border px-4 py-1 border-black' onClick={() => navigate(-1)}>
                Back
                </button>
                <h2>
                <p className='text-2xl font-bold'>Blogs On <span>{location.pathname.split("/").at(-1).replace("-"," ")}</span></p>
                </h2>
            </div>
            <Blogs/>
        </div>
        <Pagination/>
    </div>
  )
}

export default CategoryPage