import Link from 'next/link'

function Navbar() {
  return (
    <nav className='bg-slate-400 mb-8  flex justify-between items-center px-20 p-3'>
        <Link href="/">
            <div className='text-black font-bold hover:bg-gray-300 rounded-xl px-2'>Home</div>
              
        </Link>

        <ul>
            <li className='text-black font-bold hover:bg-gray-300 rounded-xl px-2'>
                <Link href="/about">
                    About
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar