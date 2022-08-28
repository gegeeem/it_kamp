import React,{useState, useEffect} from 'react';
import Postitem from '../PostsItem/Postsitem';

export default function PostsList(){
    const[posts, setPosts] = useState([]);
    
    
    const getPosts = async ()=>{
        const getDataFromServer = await fetch('https://jsonplaceholder.typicode.com/posts');
        const getJson = await getDataFromServer.json();
        if(getDataFromServer.ok){
            return getJson;
        }else{
            throw new Error(`Response: ${getDataFromServer.status}`)
        }

    }
    useEffect(()=>{
        console.log('useEffect pozvana')
        getPosts().then((data)=>{
            setPosts(data);
        })
    }
    ,[]);
    return(
         <Postitem postItems={posts} />
        // <ul>
        //         {
        //     posts.map((el)=>
        //         <li key={el.id}> {el.title} </li>
        //     )
        // }
        // </ul>
        
        
    )
}