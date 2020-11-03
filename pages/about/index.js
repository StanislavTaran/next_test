import Router from 'next/router'
import MainLayout from "../../components/MainLayout";

export default function About (){
    const clickHomeLinkHandler =()=>{
        Router.push('/')
    }
    const clickPostLinkHandler =()=>{
        Router.push('/posts')
    }

    return <MainLayout title='About'>
        <h1>About Page</h1>
        <button onClick={clickHomeLinkHandler}>go back to home</button>
        <button onClick={clickPostLinkHandler}>go to posts</button>
    </MainLayout>
}