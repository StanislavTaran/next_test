import Link from "next/link";
import MainLayout from "../components/MainLayout";

export default function ErrorPage(){
    return (<MainLayout title='Not found'>
        <h1>Error 404</h1>
        <Link href='/'><a>Go Home</a></Link>
    </MainLayout>)
}