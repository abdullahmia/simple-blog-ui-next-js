import Image from 'next/image'
import Author from '../../components/common/author'
import RelatedPost from '../../components/common/relatedPost'
import Format from '../../components/layout/format'

const page = () => {
  return (
    <Format>
        <section className='container mx-auto md:px-2 py-16 w-1/2'>
            <div className='flex justify-center'>
                <Author />
            </div>
            <div className='post py-10'>
                <h1 className='font-bold text-4xl text-center pb-5'>Even the all-powerful Pointing has no control about the </h1>
                <p className='text-gray-500 text-lg text-center'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a</p>

                <div className="py-10">
                    <Image src={'/images/img4.png'} width={900} height={600} alt="Post" />
                </div>
                <div className='content text-gray-500 flex flex-col gap-4 text-md'>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however aEven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a</p>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however aEven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a</p>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however aEven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a</p>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however aEven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however aEven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however aEven the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a</p>
                </div>
            </div>
            <RelatedPost />
        </section>
    </Format>
  )
}

export default page