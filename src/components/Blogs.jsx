import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";
const Blogs = () => {
    //consuming context
    const {loading,posts} = useContext(AppContext)
    return (
        <div className="flex flex-col gap-y-3">
            {
                loading?(<Spinner/>):(
                    posts.length===0? (<div>No Posts Found</div>) :(
                        posts.map((post)=>{
                            return (<BlogDetails key={post.id} post={post}/>)
                        })
                    )
                )
            }
        </div>
    )
}

export default Blogs