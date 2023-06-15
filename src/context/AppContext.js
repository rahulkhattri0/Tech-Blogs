import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext()

function AppContextProvider(props) {
    const [loading,setLoading] = useState(false)
    const [posts,setposts] = useState([])
    const [page,setPage] = useState(1)
    const [totalPages,setTotalPages] = useState(null)
    const [likedPosts,setLikedPosts] = useState([])
    const navigate = useNavigate()
    async function fetchPosts(page,tag=null,category=null){
        //at start mark loading to true
        setLoading(true)
        let url = `${baseUrl}?page=${page}`
        if(tag){
            url = url + `&tag=${tag}`;
        }
        if(category){
            url = url + `&category=${category}`;
        }
        try{
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            setPage(data.page)
            setposts(data.posts)
            setTotalPages(data.totalPages)

        }catch(error){
            console.log(error)
            setPage(1)
            setposts([])
            setTotalPages(null)
        }
        //after api call set loading to false
        setLoading(false)
    }
    function handlePageChange(page){
        setPage(page)
        //navigate to that page
        navigate({search : `?page=${page}`})
    }
    const value = {
        loading,
        setLoading,
        page,
        setPage,
        posts,
        setposts,
        totalPages,
        setTotalPages,
        fetchPosts,
        handlePageChange,
        likedPosts,
        setLikedPosts
    }
    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider