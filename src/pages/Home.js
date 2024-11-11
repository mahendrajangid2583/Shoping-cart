import React, { useEffect, useState  } from 'react'
import Spinner from '../components/Spinner';

import Product from '../components/Product';

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
  
  async function fetchData(){
      setLoading(true);
      try {
        const res=await fetch(API_URL);
        const data=await res.json();
        setPosts(data);
        console.log(posts);
      } 
      catch (error) {
        console.log("fetching error");
        setPosts([]);
      }
      setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className='flex justify-center items-center'>
     {
      loading ? 
      <div className=' mt-[300px] flex justify-center items-center'>
      <Spinner/>
      </div> :
      (
        posts.length>0 ? 
        (
          <div className='grid lg:grid-cols-4 md:grid-cols-3 max-w-min-6xl min-h-[80vh] p-2 space-x-5 space-y-10'>
            {
                posts.map((post)=>(<Product key={post.id} post={post}/>))
            }
          </div>
        ):
        (
            <p>No post found</p>
        )
      )
     }
    </div>
  );
};

export default Home;