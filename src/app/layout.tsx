import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Candidacy Control',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <nav className='flex items-center justify-between flex-wrap bg-sky-800 p-6'>
          <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Link href='/' className='font-semibold text-xl tracking-tight'>
              CANDIDACY CONTROL
            </Link>
          </div>
          <div className='flex gap-1	'>
            <Link
              href='/'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-sky-700 hover:bg-white mt-4 lg:mt-0'
            >
              HOME
            </Link>
            <Link
              href='/about'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-sky-700 hover:bg-white mt-4 lg:mt-0'
            >
              ABOUT
            </Link>
            <Link
              href='/register'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-sky-700 hover:bg-white mt-4 lg:mt-0'
            >
              REGISTER
            </Link>
            <Link
              href='/login'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-sky-700 hover:bg-white mt-4 lg:mt-0'
            >
              LOGIN
            </Link>
            <Link
              href='/logged'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-sky-700 hover:bg-white mt-4 lg:mt-0'
            >
              LOGGED
            </Link>
          </div>
        </nav>
        <main className='container h-screen w-screen mx-auto flex items-center justify-center '>
          {children}
        </main>
        <footer className='flex items-center justify-center flex-wrap bg-sky-700 p-6'>
          <div>
            © {new Date().getFullYear()}, Developed by
            {` `}
            <Link
              href='https://www.linkedin.com/in/franciane-pires/'
              target='_blank'
              className='hover:text-sky-700 hover:bg-white'
            >
              Franciane Pires
            </Link>
            <span> and </span>
            <Link
              href='https://www.linkedin.com/in/thiagoasmedeiros/'
              target='_blank'
              className='hover:text-sky-700 hover:bg-white'
            >
              Thiago Medeiros
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
