import React from "react";
import { useNavigate } from 'react-router-dom';

const MakeReservationBtn = () => {
    const navigate = useNavigate();

    return (
        <button className="bg-[#004066] rounded-full px-12 py-4 text-gray-200 tracking-widest" onClick={() => navigate('/reservas')}>QUIERO HACER UNA RESERVA</button>
    )
}

export default MakeReservationBtn;
