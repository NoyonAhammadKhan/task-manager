import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes';

function App() {
  const [theme, setTheme]=useState("light");

  useEffect(()=>{
    if(theme=== 'dark'){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])

  const handleThemeSwitch =()=>{
    console.log('switch clicked')
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
  
      // <div className="h-screen bg-white dark:bg-black flex justify-center items-center">
      //   <button onClick={handleThemeSwitch} className='bg-green-200 p-4 rounded-3xl'>
      //     {theme === 'dark' ? 'light' : 'dark'}
      //   </button>
      // </div>
      <div>
        <RouterProvider router={routes}></RouterProvider>
      </div>
  
  );
}

export default App;
