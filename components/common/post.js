import Image from "next/image";
import Link from "next/link";
import Author from "./author";

const post = ({post}) => {

    return (
    <div className="item">
        <div className="image">
            {
                post?.img && (
                    <Link href={`/posts/${post?.id}`}><a><Image src={post?.img} width={550} height={350} alt='' /></a></Link>
                )
            }
            
        </div>
        <div className="info flex justify-center flex-col">
            <div className="cat">
                <Link href={`/posts/${post?.id}`}><a className="text-orange-600 hover:text-orange-800">{post?.category}</a></Link>
                <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- {post?.published}</a></Link>
            </div>
            <div className="title">
                <Link href={`/posts/${post?.id}`}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{post?.title}</a></Link>
            </div>
            <p className="text-gray-500 py-3">
                {post?.description.slice(0, 200)}
            </p>
            <Author author={post?.author} />
        </div>
    </div>
  )
}

export default post