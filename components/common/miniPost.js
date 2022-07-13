import Image from "next/image"
import Link from "next/link"
import Author from "./author"

const miniPost = () => {
  return (
    <div className="flex gap-5">
        <div className="image flex flex-col justify-center">
            <Link href={"/"}><a><Image src={"/images/img3.png"} className="rounded" width={300} height={300} alt='' /></a></Link>
        </div>
        <div className="info flex justify-center flex-col">
            <div className="cat">
                <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
            </div>
            <div className="title">
                <Link href={"/"}><a className="text-lg font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</a></Link>
            </div>
            <Author />
        </div>
    </div>
  )
}

export default miniPost