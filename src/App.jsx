import { useEffect, useState } from 'react'
import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home';
import Explore from './pages/explore/Explore'
import pageNotFound from './pages/404/pageNotFound'
import Details from './pages/details/Details'
import SearchResult from './pages/searchResult/SearchResult'

function App() {

  const dispatch = useDispatch()

  const {url} = useSelector((state) => state.home)
  
  useEffect(()=>{
    apiTesting();
  },[])
  const apiTesting = ()=>{
    fetchDataFromApi('/movie/popular')
    .then((res)=>{
        dispatch(getApiConfiguration(res));
    })
  }
  return (
    <div className='App'>App
      {url?.total_pages}
    </div>
  )
}

export default App
