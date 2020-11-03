import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import MainLayout from "../components/MainLayout";
import {wrapper} from "../redux/store";
import PostItem from "../components/PostItem/PostItem";
import * as postsActions from '../redux/posts/postsActions'

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

    const dispatch = useDispatch()
    useEffect(()=>{
        if(posts.length){
            dispatch(postsActions.GET_POSTS_SUCCESS(posts))}

    },[])

    return(<MainLayout title='Posts'>
            <h1>Posts Page</h1>
            <ul>
                {posts.map(post=>{
                    return <li key={post.id}>
                        <PostItem post={post} />
                    </li>
                })}
            </ul>


        </MainLayout>

    )
}

export const getStaticProps = wrapper.getStaticProps( async ({store})=>{

    const res = await   fetch('http://localhost:4200/posts');
    const posts = await res.json();
    return {
      props : {posts}
    }
})