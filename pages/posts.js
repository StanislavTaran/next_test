import {useState, useEffect} from 'react'
import MainLayout from "../components/MainLayout";

export default function Posts ({posts}){
    // const [posts, setPosts] = useState([])
    //
    // useEffect(()=>{
    //     async function load(){
    //      const res = await   fetch('http://localhost:4200/posts');
    //      const json = await res.json();
    //      setPosts(json)
    //     }
    //
    //     load()
    // },[])

    return(<MainLayout title='Posts'>
            <h1>Posts Page</h1>
            <pre>{JSON.stringify(posts,null,2)}</pre>
        </MainLayout>

    )
}

Posts.getInitialProps = async ()=>{
    const res = await   fetch('http://localhost:4200/posts');
    const posts = await res.json();

    return {
        posts
    }
}