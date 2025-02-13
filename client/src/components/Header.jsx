import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function Header() {
  const {currentUser} = useSelector(state =>state.user);
  const navigate = useNavigate();
  const [searchTerm , setSearchTerm] = useState('');
  const handleSubmit =(e)=>{
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);

  };
  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const urlSearch = urlParams.get('searchTerm');
    if (urlSearch){
      setSearchTerm(urlSearch);
    }
  },[location.search])
  return (
    <header className='bg-slate-300 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Dunphy</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        </Link>
        <form onSubmit={handleSubmit}
        className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type='text' placeholder='Search....' className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} />
            <FaSearch className='text-slate-600'/>
        </form>
        <ul className='flex gap-3'>
            <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
            </Link>
            <Link to='/profile'>
              {currentUser ? (<img className='rounded-full h-7 w-7 object-cover ' src={currentUser.avatar || '/assets/profile.jpg'} alt='profile'/>) : <li className=' text-slate-700 hover:underline'>Sign in</li>}
            
            </Link>
        </ul>
        </div>
        
    </header>
  )
}
