import Link from 'next/link'
import Head from "next/head";

export default function MainLayout({title, children}){
    return(
        <>
            <Head>
                <title>{`${title} | Test`}</title>
                <meta charSet="UTF-8" />
                <meta name="keywords" content="HTML, CSS, JavaScript, NEXT" />
                <meta name="description" content="This is my first next.js app " />
            </Head>
            <nav>
                <Link href='/'><a>Home</a></Link>
                <Link href='/about'><a>About</a></Link>
                <Link href='posts'><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>
                {`
                nav{
                display: block;
                height: 60px;
                background-color: green;
                color: #fff;
                display: flex;
                justify-content: space-around;
                align-items: center;
                }
                nav a{
                text-decoration: none;
                }
                `}
            </style>
        </>
    )
}