import React, { useContext } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import BlogDetails from '../components/BlogDetails'
const Liked = () => {
  const navigate = useNavigate()
  const {likedPosts} = useContext(AppContext)
  console.log(likedPosts)
  return (
    <div>
    <Header/>
    <div className='flex flex-col w-[630px] mt-20 mx-auto mb-20'>
        <div className='flex gap-x-3'>
                <button className='rounded-md border px-4 py-1 border-black' onClick={() => navigate(-1)}>
                Back
                </button>
                <h2>
                <p className='text-2xl font-bold'>Your Liked Posts</p>
                </h2>
        </div>
        {
          likedPosts.length===0?(<p>No Liked Posts</p>):(
            likedPosts.map(likedPost=>(<BlogDetails key={likedPost.id} post={likedPost}/>))
          )
        }
    </div>
    </div>
  )
}

export default Liked