import Image from "next/image"
import Link from "next/link"

const author = () => {
  return (
    <div className="author flex py-5">
        <Image src={'/images/author/author1.jpg'} height={60} width={60} className='rounded-full' alt='author' />
        <div className="flex flex-col justify-center px-4">
            <Link href={'/'}><a className="text-md font-bold text-gray-800 hover:text-gray-600">Abdullah Mia</a></Link>
            <span className="text-sm text-gray-500 capitalize">Full stack web app developer</span>
        </div>
    </div>
  )
}

export default author