import '../App.css';
import React from "react";

import Hero from "../components/Hero"
import Card from "../components/Card"
import Filter from '../components/Filter';
import Nav from '../components/Nav';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import ProductDetails from "./ProductDetails"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Footer from '../components/Footer';
import { useTranslation } from "react-i18next";
import { ArrowUpIcon } from '@heroicons/react/24/outline';

function App() {


  var list = []
  for (let i = 0; i < 10; i++) {
    list.push(<Card key={i}/>)
  }

    // state to manage the dark mode
    const [toggleDarkMode, setToggleDarkMode] = useState(false);

    // function to toggle the dark mode as true or false
    const toggleDarkTheme = () => {
      setToggleDarkMode(!toggleDarkMode);
    };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/product_details",
      element: <ProductDetails/>
    },
  ]);
  const darkTheme = createTheme({
    palette: {
      mode:toggleDarkMode?'dark':"light",
    },
  });

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

  const {t} = useTranslation()
  function HomePage(){
    return(
      <div>
        <Hero/>
        <div className='text-center mt-10 text-2xl'>
          {t("greeting")}
        </div>
              <Filter/>

              <div className='m-auto items-center max-md:flex max-md:flex-col  grid xl:grid-cols-3 2xl:grid-cols-4 max-xl:grid-cols-2  justify-between  gap-6 mx-[10vw]'>
                {list.map((e,index)=>(
                    <Card index={index} key={e}/>
                  ))}
        </div>
      </div>
    )
  }


  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }


  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div className={`HomePage`}>
      <div className='flex items-center  '>
      <div className='w-full'>
      <Nav toggleDarkMode={toggleDarkMode}/>
      {/* <Counter/> */}
      </div>
      <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch checked={toggleDarkMode} onChange={toggleDarkTheme}  sx={{ m: 1 }} defaultChecked />}
        />
      </FormGroup>
      {/* <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} /> */}
      </div>
      <RouterProvider router={router} />
    </div>
      <Footer/>
    <button onClick={()=>ScrollToTop()}
      className='bg-[#c9a98a] text-[#543214] p-3 border border-[#543214] left-full mr-4 mb-4 bottom-4 sticky  rounded-full'>
      <ArrowUpIcon className=' size-5'/>
    </button>
    </ThemeProvider>
  );
}

export default App;
