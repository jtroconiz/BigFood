import React from 'react';
import { useNavigate } from 'react-router-dom';
import {createRef } from 'react';

const Footer = () => {
    const navigate = useNavigate();
    const tooltip = createRef();

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText('reservas.bigfood@gmail.com')
            .then(() => showTooltip())
            .catch((error) => console.log('Error al copiar el texto',error));
    }

    const showTooltip = () => {
        console.log(tooltip.current)
        tooltip.current.classList.remove('hidden');
        const removeHidden = () => tooltip.current.classList.add('hidden');
        setTimeout(removeHidden, 3000);
        clearTimeout(removeHidden);
    }

    return (
        <footer className="flex-col items-center bg-[#490011] text-white h-[20em] px-[1em] text-center text-sm md:text-md lg:text-lg overflow-hidden ">
            <div className='flex cursor-pointer items-center justify-center pt-[4em] pb-[2em]'>
                <div className='z-50 h-full flex items-center cursor-pointer' onClick={() => navigate('/')}>
                    <img src={`${process.env.PUBLIC_URL}/img/Logo2bigFood.png`} className='w-[9em]' alt="logo2">
                    </img>
                </div>
            </div> 
            <div className='h-[40%] flex flex-col justify-around pb-[1em] '>
                <p className='font-bold tracking-widest'>
                    <a href='https://goo.gl/maps/xWqz3wwmaCqb8Q1U6' target='_blank' rel='noreferrer' className='cursor-pointer hover:text-[#cea481]'>
                    Dirección: Malabia 1893, CABA
                    </a>
                    <span className='px-3'>
                    | 
                    </span>
                    <span>
                        Teléfono: 11 3955 5033
                    </span>
                </p>
                <p className='text-[.9em] tracking-wider cursor-pointer hover:text-[#cea481]' onClick={copyToClipboard}>
                    <span className="px-3">[</span>  
                        reservas.bigfood@gmail.com
                    <span className="px-3">]</span>
                </p>
                <p className='text-xs tracking-widest'>
                    Copyright © 2023 <strong>BIG FOOD</strong> - All Rights Reserved
                </p>
            </div>
            <div id='tooltip_side' className="text-md tooltip fixed bottom-0 inset-x-0 bg-black text-white px-6 rounded max-w-max mb-6 mx-auto hidden" ref={tooltip}>
                <div>Mail copiado en el portapapeles</div>
            </div>
        </footer>        
    )
}

export default Footer;