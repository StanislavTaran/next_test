// import {useRouter} from 'next/router'

import MainLayout from "../../components/MainLayout";
import {wrapper} from "../../redux/store";
import {fetchPosts, fetchSinglePost} from "../../api/postsAPI";
import PostItem from "../../components/PostItem/PostItem";


export default function Post ({post}){
    // const router = useRouter()

    return <MainLayout title={post.title}>
        {/*<h1>{`PostItem ${router.query.id}`}</h1>*/}
        <h1>{`Post ${post.title}`}</h1>
        <PostItem post={post} />
    </MainLayout>
}

export const getStaticProps = wrapper.getStaticProps(async ({params})=>{
    const res = await fetchSinglePost(params.id)
    const post = await res.data
    return {
        props : JSON.parse(JSON.stringify({post}))

    }
})

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetchPosts()
    const posts = await res.data

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}