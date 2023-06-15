import './App.css'
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Home from "./Pages/Home";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import { Routes,Route, useSearchParams, useLocation } from "react-router-dom";
import Liked from './Pages/Liked';
export default function App() {
  const [searchParams,setSearchParams] = useSearchParams()
  const location = useLocation()
  const {fetchPosts} = useContext(AppContext)
  useEffect(()=>{
    //basically whenever we hit a new route this is called
    const page = searchParams.get("page") ?? 1 //default value syntax (ECMAScript)
    if(location.pathname.includes("tag")){
      const tag = location.pathname.split("/").at(-1)
      fetchPosts(page,tag)
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1)
      fetchPosts(page,category)
    }
    else{
      fetchPosts(Number(page))
    }
  },[location.pathname,location.search])
  return (
    <div className='w-full h-full'>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/liked" element={<Liked/>}/>
      <Route path="/tag/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
     </Routes>
    </div>
  );
}
