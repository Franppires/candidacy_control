

export default function Login() {


  return (
    <div className='flex justify-center items-center h-screen'>
      <div className=" bg-sky-100 rounded-lg p-10 shadow">
        <h2 className="text-2xl text-center text-sky-700 font-bold mb-4">Login</h2>
        <form action="">
          <div className="mb-4">
            <label 
              htmlFor="Email"
              className="block text-sky-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input 
              type="email" 
              className="w-96 text-sky-700 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-700"
              name="email"
              placeholder="exemplo@candidacy.com"
            />
          </div>
          <div className="mb-4">
            <label 
              htmlFor="password"
              className=" text-sky-700 block text-sm font-bold mb-2"
            >
              Password
            </label>
            <input 
              type="password" 
              className="w-96 text-sky-700 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-700" 
              name="password"
              placeholder='1234'
            />
          </div>
          <button 
            type="submit"
            className="w-96 bg-sky-500 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
          
        </form>
      </div>
    </div>
  )
}
