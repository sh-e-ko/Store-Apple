import React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import './App.css'
import { useRoutes } from 'react-router-dom';
import NotFound from './Layouts/NotFound'
import Home from './Pages/Home/Home'
import Mac from './Pages/Mac/Mac'
import IPad from "./Pages/iPad/IPad"
import Watch from './Pages/Watch/Watch'
import IPhone from './Pages/IPhone/IPhone'
import Tv from './Pages/Tv/Tv'
import Airpods from './Pages/Airpods/Airpods'
function App()
{
  const routs = useRoutes([
    {
      path: '/*',
      element: <NotFound />
    },
    {
      path: '/',
      element: < Home />
    },

    {
      path: '/mac',
      element: <Mac />
    },
    {
      path: '/iPad',
      element: <IPad />
    },
    {
      path: '/Watch',
      element: <Watch />
    },
    {
      path: "/iPhone",
      element: <IPhone />
    },
    {
      path: "/tv",
      element: <Tv />
    },
    {
      path: "/airpods",
      element: <Airpods />
    },

    
  ])

  return (
    <>

      {routs}

    </>
  )
}

export default App
