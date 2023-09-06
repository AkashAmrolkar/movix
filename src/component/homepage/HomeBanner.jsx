import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/';

import useFetch from '../../hooks/useFetch';
import Img from '../../lazyload/Img';
import ContentWrapper from '../contentwrapper/ContentWrapper';
const HomeBanner = () => {
    

    const [background, setbackground] = useState('');
    const [searchText, setSearchText] = useState('');

    const navigate = useNavigate();
    const {url} = useSelector ((state)=> state.home)

    const {data, loading} = useFetch('/movie/upcoming');

    useEffect(()=>{
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
        setbackground(bg);
    }, [data])

    const searchQueryHandler = (e) =>{
        if(e.key === "Enter" && searchText.length > 0){
            navigate(`/search/${searchText}`)
        }
        
    }

    const homeBannerStyle = {
        background: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    }
  return (
    <div className='relative h-[70vh] w-full home-banner-bg' style={homeBannerStyle}>
        <div>
            
        </div>
        <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
            <ContentWrapper>
                <div className='flex gap-6 justify-center text-center flex-col'>
                    <h2 className='text-6xl font-bold text-white capitalize'>welcome</h2>
                    <p className='text-2xl text-white'> Millions of Movies, TV shows and people to Discover, Explore now.</p>
                    <div className='w-full flex gap-5'>
                        <input className=' w-fit h-[40px] border border-transparent rounded-xl' type='text' value={searchText} name='search' onChange={(e)=> setSearchText(e.target.value)} onKeyUp={searchQueryHandler} />
                        <button className='bg-white border border-transparent rounded-2xl px-5 py-2'>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
        
        
        
    </div>
  )
}

export default HomeBanner