import Link from 'next/link'
import styles from './PostItem.module.css'


export default function PostItem({post}){
    return(<article>
       <Link href='/post/id' as={`/post/${post.id}`} ><a><h3>{post.title}</h3></a></Link>

        <p>{post.body}</p>
    </article>)
}