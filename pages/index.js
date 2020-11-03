import Link from 'next/link'
import MainLayout from "../components/MainLayout";

export default function Index (){
    return    (
        <MainLayout title='Home'>
            <h1>Hello Next.JS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <Link href='./about'><a >about</a></Link>
            <br/>
            <Link href='./posts'><a >posts</a></Link>

        </MainLayout>
    )
}