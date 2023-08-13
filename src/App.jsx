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
    apiTesting();
  }, [])

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular').then((res)=>{
      console.log(res);
      dispatch(getApiConfiguration(res))
    })
  }
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
