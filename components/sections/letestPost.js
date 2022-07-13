import Post from "../common/post";

const letestPost = () => {
  return (
    <section className="container mx-auto md:px-20 py-10">
        <h1 className="capitalize font-bold text-4xl text-center pb-14">letest post</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </section>
  )
}

export default letestPost;