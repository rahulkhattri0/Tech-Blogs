
import { useContext} from 'react'
import { NavLink } from 'react-router-dom'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { AppContext } from '../context/AppContext'
//will use navlink here
const BlogDetails = ({post}) => {
  const {likedPosts,setLikedPosts} = useContext(AppContext)
  console.log(likedPosts)
  function checkIfIncludes(){
    let check = false
    check = likedPosts.some(liked=>liked.id===post.id)
    return check
  }
  function handleLikeChange(){
    if(checkIfIncludes()===false){
        setLikedPosts([post,...likedPosts])
    }
    else{
        setLikedPosts(likedPosts.filter((liked)=>liked.id!==post.id))
    }
  }
  return (
    <div className='flex flex-col gap-y-2 hover:shadow-md rounded-xl duration-500 p-3'>
        <span className='font-bold text-xl'>{post.title}</span>
        <p>
            By <span className='italic text-md'> {post.author}</span> On 
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className='font-bold text-md'> {post.category}</span>
            </NavLink>
        </p>
        <p>Posted On {post.date}</p>
        <p className='text-md'>{post.content}</p>
        <div>
            {
                post.tags.map((tag)=>{
                return (
                    <NavLink to={`/tag/${tag.replaceAll(" ","-")}`}>
                        <span className='text-blue-500 mr-3'>#{tag}</span>
                    </NavLink>
                )
            })   
            }{
                <button onClick={handleLikeChange}>{checkIfIncludes()?(<FcLike/>):(<FcLikePlaceholder/>)}</button>
            }
        </div>
    </div>
  )
}

export default BlogDetails