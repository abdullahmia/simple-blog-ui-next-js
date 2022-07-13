import Image from 'next/image';
import Link from 'next/link';
import Author from '../common/author';

const Slide = ({post}) => {
  return (
    <div className="grid md:grid-cols-2 gap-10">
            <div className="image">
                {
                    post?.img && (
                        <Link href={`/posts/${post?.id}`}><a><Image src={post?.img} width={600} height={600} alt='' /></a></Link>
                    )
                }
                
            </div>
            <div className="info flex justify-center flex-col px-10 lg:px-0">
                <div className="cat">
                    <Link href={`/posts/${post?.id}`}><a className="text-orange-600 hover:text-orange-800">{post?.category}</a></Link>
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${post?.id}`}><a className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600">{post?.title}</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                   {post?.description}
                </p>
                <Author author={post?.author} />
            </div>
        </div>
  )
}

export default Slide;