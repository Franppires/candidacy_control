import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex items-start'>
      <div className='mx-6 '>
        <div className='py-4'>
          <h1 className='text-4xl'>Welcome to application control!</h1>
          <p className='text-2xl my-8'>Manage your applications with ease.</p>
          <p className='text-2xl my-8'>Say goodbye to cluttered spreadsheets and focus on your path to your dream job.</p>
          <Link
            href='/register'
            className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-sky-700 hover:bg-white mt-4 lg:mt-0'
          >
            Register
          </Link>
        </div>
        <div>
          <img src="/assets/" alt="" />
        </div>
      </div>
    </div>
  );
}
