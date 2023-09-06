import React, {useState, useEffect} from 'react'
import Logo from '../assets/movix-logo.svg'
import { useNavigate, useLocation } from 'react-router-dom';
import {BiSearch} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'
const Header = () => {
  const [show, setShow] = useState('top');
  const [lastScrollY, setlastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [showSearch, setShowSearch] = useState('')
  const navigate = useNavigate();
  const location = useLocation();

  const controlNavbar = () =>{
    if(window.scrollY > 200){
      if(window.scrollY > lastScrollY){
        setShow('hide')
      }
      else{
        setShow('show')
      }
      setlastScrollY(window.scrollY);
    }
    else{
      setShow('show');
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', controlNavbar);
    return()=>{
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])
  const searchQueryHandler = (e) =>{
    if(e.key === "Enter" && searchText.length > 0){
        navigate(`/search/${searchText}`)

        setTimeout(()=>{
          setShowSearch(false);
          setShowSearch('');
        }, 1000)
    }
    
  }
  const openSearch = () =>{
    setMobileMenu(false);
    setShowSearch(true);
  }

  const openmobileMenu = () =>{
    setMobileMenu(true);
    setShowSearch(false);
  }

  const navigationHanler = (type) =>{
    if(type === 'movie'){
      navigate('/explore/movie')
    }
    else{
      navigate('/explore/tv')
    }
    setMobileMenu(false);
  }
  return (
    <header className={`header ${mobileMenu?'mobileView' : ''} flex justify-between items-center bg-gray-800`}>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='flex items-center gap-5'>
        <ul className={`${mobileMenu?'flex' : 'hidden'} md:flex justify-center items-start gap-5 ${mobileMenu? 'flex-col':''}`}>
          <li className='text-white' onClick={()=> navigationHanler('movie')}>Movies</li>
          <li className='text-white' onClick={()=> navigationHanler('tv')}>TV Shows</li>
        </ul>
        <BiSearch onClick={openSearch} />

        {/* For Mobile menu*/}
        <div className=' md:hidden'>
          {
            mobileMenu? <MdClose onClick={()=>setMobileMenu(false)} /> : <GiHamburgerMenu onClick={openmobileMenu} />
          }
        </div>

        {showSearch && (
          <div className='w-full flex gap-5'>
            <input className=' w-fit h-[40px] border border-transparent rounded-xl' type='text' value={searchText} name='search' onChange={(e)=> setSearchText(e.target.value)} onKeyUp={searchQueryHandler} />
            <MdClose onClick={()=>setShowSearch(false)} />
          </div>
        )}
        
      </div>
    </header>
  )
}

export default Header