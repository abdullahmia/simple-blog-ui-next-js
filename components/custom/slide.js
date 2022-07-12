import Image from 'next/image';
import Link from 'next/link';

const Slide = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10">
            <div className="image">
                <Link href={"/"}><a><Image src={"/images/img1.jpg"} width={600} height={600} alt='' /></a></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                <h1>author</h1>
            </div>
        </div>
  )
}

export default Slide;