import { Audio } from 'react-loader-spinner';

const loader = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <Audio
            height="100"
            width="100"
            color='blue'
            ariaLabel='loading'
        />
    </div>
  )
}

export default loader;