import MiniPost from "./miniPost"

const relatedPost = () => {
  return (
    <div className="pt-10">
        <div className="flex gap-7">
                <div className="item">
                    <h1 className="font-bold py-12 text-xl capitalize">realted psot</h1>
                    <div className="flex flex-col gap-6">
                        <MiniPost />
                        <MiniPost />
                        <MiniPost />
                        <MiniPost />
                        <MiniPost />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default relatedPost