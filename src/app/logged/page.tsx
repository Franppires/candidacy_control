export default function Logged() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className=' bg-sky-100 rounded-lg p-10 shadow'>
        <h2 className='text-2xl text-center text-sky-700 font-bold mb-4'>
          New Application
        </h2>
        <form action='' className="grid grid-cols-2 divide-x ">
          <div>
            <div className='mb-4'>
              <label
                htmlFor='Company'
                className='block text-sky-700 text-sm font-bold mb-2'
              >
                Company
              </label>
              <input
                type='Company'
                className='w-96 text-sky-700 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-700'
                name='Company'
                placeholder='Company'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='job link'
                className=' text-sky-700 block text-sm font-bold mb-2'
              >
                job link
              </label>
              <input
                type='job link'
                className='w-96 text-sky-700 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-700'
                name='job link'
                placeholder='job link'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='Channel used'
                className=' text-sky-700 block text-sm font-bold mb-2'
              >
                Channel used
              </label>
              <input
                type='Channel used'
                className='w-96 text-sky-700 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-700'
                name='Channel used'
                placeholder='Channel used'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='Status'
                className=' text-sky-700 block text-sm font-bold mb-2'
              >
                Status
              </label>
              <input
                type='Status'
                className='w-96 text-sky-700 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-700'
                name='Status'
                placeholder='Status'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='Personalized approach'
                className=' text-sky-700 block text-sm font-bold mb-2'
              >
                Personalized approach
              </label>
              <input
                type='Personalized approach'
                className='w-96 text-sky-700 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-700'
                name='Personalized approach'
                placeholder='Personalized approach'
              />
            </div>
          </div>

          <div>
            <div className='mb-4'>
              <label
                htmlFor='Application data'
                className=' text-sky-700 block text-sm font-bold mb-2'
              >
                Application data
              </label>
              <input
                type='Application data'
                className='w-96 text-sky-700 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-700'
                name='Application data'
                placeholder='Application data'
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='Interview date'
                className=' text-sky-700 block text-sm font-bold mb-2'
              >
                Interview date
              </label>
              <input
                type='Interview date'
                className='w-96 text-sky-700 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-700'
                name='Interview date'
                placeholder='Interview date'
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='Technical test date'
                className=' text-sky-700 block text-sm font-bold mb-2'
              >
                Technical test date
              </label>
              <input
                type='Technical test date'
                className='w-96 text-sky-700 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-700'
                name='Technical test date'
                placeholder='Technical test date'
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='Feedback received'
                className=' text-sky-700 block text-sm font-bold mb-2'
              >
                Feedback received
              </label>
              <input
                type='Feedback received'
                className='w-96 text-sky-700 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-700'
                name='Feedback received'
                placeholder='Feedback received'
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='Outras observações'
                className=' text-sky-700 block text-sm font-bold mb-2'
              >
                Outras observações
              </label>
              <input
                type='Outras observações'
                className='w-96 text-sky-700 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-700'
                name='Outras observações'
                placeholder='Outras observações'
              />
            </div>
          </div>

          <button
            type='submit'
            className='w-96 bg-sky-500 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Register new application

          </button>
          {/* acess with gmail */}
        </form>
      </div>
    </div>
  );
}
