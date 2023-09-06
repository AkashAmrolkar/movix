import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';


import './App.css'

import {fetchDataFromApi} from './utils/api'
import { getApiConfiguration } from './store/homeSlice'

//import { UseSelector, useDispatch } from 'react-redux/es/hooks/useSelector'

function App() {
  const dispatch = useDispatch();
  const {url} = useSelector((state)=>state.home);
  console.log(url)
  useEffect (()=>{
    fetchApiConfig();
  }, [])

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res)=>{
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + 'original',
        poster: res.images.secure_base_url + 'original',
        profile: res.images.secure_base_url + 'original',
      }
      dispatch(getApiConfiguration(url))
    })
  }
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
