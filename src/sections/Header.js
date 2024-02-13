import React from 'react';
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
    const links=[
        {name:'Home', to:"/"},
        {name:'Menu', to:"/Menu"},
        {name:'Platos', to:"Platos"},
        {name:'Reservas', to:"Reservas"}
    ]
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <header className='shadow-md w-full  top-0 left-0 relative tracking-widest '>
            <div className='bg-gradient-to-r from-[#9b0e2c] to-[#490011] h-[2em] w-full absolute top-0'></div>
            <div className='bg-[#9b0e2c] h-[2em] w-full absolute bottom-0 text-white flex items-center justify-center'>
                <span className='hidden lg:block lg:text-sm tracking-widest text-gray-200'>
                    “Un lugar acogedor, construido por una familia, donde priman los sabores y las ganas de pasarla bien...”
                </span>
            </div>
            
            <div className='flex items-center justify-start lg:justify-between py-8 md:px-[4em] lg:px-[7em] px-7 bg-[#00152a] h-[12em] '>
                <div className='flex cursor-pointer items-center font-[Poppins] text-gray-800 h-full'>
                    <div className='z-50 h-full flex items-center cursor-pointer' onClick={() => navigate('/')}>
                    <img src={`${process.env.PUBLIC_URL}/img/CircleLogo.png`} alt="logo" className='w-[9em]'/>
                    </div>
                </div> 
                <div onClick={()=>setOpen(!open)} className='text-3xl cursor-pointer lg:hidden absolute right-[10%] top-[40%] text-[#cea481]'>
                  {<ion-icon name={open ? 'close' : 'menu'}></ion-icon>} 
                </div>
                <ul className={`lg:flex lg:items-center lg:pb-0 lg:pt-0 pb-12 absolute lg:static bg-[#00152a] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-50 ease-in ${open ? 'top-[100%] opacity-100':'top-[-490px]'} lg:opacity-100 opacity-0 med-z`}>
                    {
                        links.map((link)=>(
                            <li key={link.name} className='lg:ml-8 text-2xl lg:text-xl lg:my-0 my-7 px-6 '>
                                <NavLink  to={link.to} className=" text-gray-200 hover:text-[#cea481] duration-500 whitespace-nowrap " onClick={()=>(setOpen(false))}>
                                    {link.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </header>
    )
}

export default Nav;