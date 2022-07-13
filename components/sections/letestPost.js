import Image from "next/image";
import Link from "next/link";
import fetcher from "../../lib/fetcher";
import Author from "../common/author";
import Post from "../common/post";

const letestPost = () => {
    const {isLoading, isError, data} = fetcher('/posts/post');
    if (isLoading) {
      return <div>Loading....</div>
    }
  return (
    <section className="container mx-auto md:px-20 py-10 px-10">
        <h1 className="capitalize font-bold text-4xl text-center pb-14">letest post</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            data.map((value, key) => {
              return post && <Post key={key} post={value} />
            })
          }
        </div>
    </section>
  )
}


function post () {
  <div className="item">
        <div className="image">
            <Link href={"/"}><a><Image src={post?.img} width={550} height={350} alt='' /></a></Link>
        </div>
        <div className="info flex justify-center flex-col">
            <div className="cat">
                <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">{post?.category}</a></Link>
                <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
            </div>
            <div className="title">
                <Link href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</a></Link>
            </div>
            <p className="text-gray-500 py-3">
                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            </p>
            <Author author={post?.author} />
        </div>
    </div>
}

export default letestPost;