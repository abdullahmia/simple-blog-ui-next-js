import Image from "next/image"
import Link from "next/link"

const author = ({author}) => {
  return (
    <div className="author flex py-5">
      {
        author?.img && (
          <Image src={author?.img} height={60} width={60} className='rounded-full' alt='author' />
        )
      }        
        <div className="flex flex-col justify-center px-4">
            <Link href={'/'}><a className="text-md font-bold text-gray-800 hover:text-gray-600">{author?.name}</a></Link>
            <span className="text-sm text-gray-500 capitalize">{author?.designation}</span>
        </div>
    </div>
  )
}

export default author