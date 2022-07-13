import MiniPost from "../common/miniPost"

const categoryPost = () => {
  return (
        <section className="container mx-auto md:px-20 py-16 px-6">
            <div className="grid lg:grid-cols-2 gap-7">
                <div className="item">
                    <h1 className="font-bold py-12 text-xl">Buisness</h1>
                    <div className="flex flex-col gap-6">
                        <MiniPost />
                        <MiniPost />
                        <MiniPost />
                        <MiniPost />
                        <MiniPost />
                    </div>
                </div>
                <div className="item">
                    <h1 className="font-bold py-12 text-xl">Travel</h1>
                    <div className="flex flex-col gap-6">
                        <MiniPost />
                        <MiniPost />
                        <MiniPost />
                        <MiniPost />
                        <MiniPost />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default categoryPost