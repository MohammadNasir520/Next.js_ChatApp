import Link from 'next/link';


const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
           <Link href={'/'}>Home</Link>
           <Link href={'/pages/Login'}>SignIn</Link>
           <Link href={'pages/SignUp'}>SignUp</Link>
        </div>
    );
};

export default Navbar;