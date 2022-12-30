import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
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
  const {user, logOut}=useContext(AuthContext);
    return (
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <Link><h1 className='text-3xl mt-3'>Task Zero</h1></Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">
        
          <li className="flex">
          <Link to="/" rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">My Task</Link>
          </li>
          <li className="flex">
          <Link to="/addtask" rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Add Task</Link>
          </li>
          <li className="flex">
          <Link to="/completedtask" rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Completed Task</Link>
          </li>
        </ul>
        <ul>
          <li>{theme === "light" ?<button className='mt-5 border border-fuchsia-700 p-3' onClick={handleThemeSwitch}>Dark</button>:<button className='mt-5 border border-fuchsia-700 p-3'  onClick={handleThemeSwitch}>Light</button>}</li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
         { user? <button onClick={logOut} className="self-center px-8 py-3 rounded">Logout</button>:
         <div>
           <Link to="/login"><button className="self-center px-8 py-3 rounded">Sign in</button></Link>
           <Link to='/signup'><button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button></Link>
           </div>
         }
        </div>
        <button className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
    
    );
};

export default Header;