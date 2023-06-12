
export default function Register() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className=' bg-sky-100 rounded-lg p-10 shadow'>
        <h2 className='text-2xl text-center text-sky-700 font-bold mb-4'>
          Register
        </h2>
        <form action=''>
          <div className='mb-4'>
            <label
              htmlFor='First name'
              className='block text-sky-700 text-sm font-bold mb-2'
            >
              First name
            </label>
            <input
              type='First name'
              className='w-96 text-sky-700 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-700'
              name='First name'
              placeholder='First name'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='Last name'
              className=' text-sky-700 block text-sm font-bold mb-2'
            >
              Last name
            </label>
            <input
              type='Last name'
              className='w-96 text-sky-700 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-700'
              name='Last name'
              placeholder='Last name'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='Email'
              className=' text-sky-700 block text-sm font-bold mb-2'
            >
              Email
            </label>
            <input
              type='Email'
              className='w-96 text-sky-700 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-700'
              name='Email'
              placeholder='Email'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='Phone'
              className=' text-sky-700 block text-sm font-bold mb-2'
            >
              Phone
            </label>
            <input
              type='Phone'
              className='w-96 text-sky-700 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-700'
              name='Phone'
              placeholder='Phone'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='Password'
              className=' text-sky-700 block text-sm font-bold mb-2'
            >
              Password
            </label>
            <input
              type='Password'
              className='w-96 text-sky-700 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-700'
              name='Password'
              placeholder='Password'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='Confirm password'
              className=' text-sky-700 block text-sm font-bold mb-2'
            >
              Confirm password
            </label>
            <input
              type='Confirm password'
              className='w-96 text-sky-700 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-700'
              name='Confirm password'
              placeholder='Confirm password'
            />
          </div>
          <button
            type='submit'
            className='w-96 bg-sky-500 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Register
          </button>
          {/* acess with gmail */}
        </form>
      </div>
    </div>
  );
}
