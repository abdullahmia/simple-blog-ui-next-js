import Image from 'next/image'
import { useRouter } from 'next/router'
import Author from '../../components/common/author'
import Loader from '../../components/common/loader'
import RelatedPost from '../../components/common/relatedPost'
import Format from '../../components/layout/format'
import fetcher from '../../lib/fetcher'


const Post = () => {
    const router = useRouter();
    const {id} = router.query;

    const { isLoading, data } = fetcher(`/posts/${id}`)

    if (isLoading) {
        return <Loader />
    }

    return (
    <Format>
        <section className='container mx-auto md:px-2 py-16 lg:w-1/2 lg:px-0 px-10'>
            <div className='flex justify-center'>
                <Author author={data?.author} />
            </div>
            <div className='post py-10'>
                <h1 className='font-bold lg:text-4xl text-2xl text-center pb-5'>{data?.title}</h1>
                <p className='text-gray-500 text-lg text-center'>{data?.subtitle}</p>

                <div className="py-10">
                    {
                        data?.img && (
                            <Image src={data?.img} width={900} height={600} alt="Post" loading='lazy' />
                        )
                    }
                    
                </div>
                <div className='content text-gray-500 flex flex-col gap-4 text-md'>
                    <p>{data?.description}</p>
                </div>
            </div>
            <RelatedPost />
        </section>
    </Format>
  )
}

export default Post