import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';



const Layout = ({ children }) => {
    const buttons=[
        {name:'whatsapp', to:"https://api.whatsapp.com/send?phone=+541139555033&text=Hola,%20te%20escribo%20desde%20la%20web.%20Quisiera%20hacer%20una%20consulta:", icon:"logo-whatsapp", size:"1.3em", color:"white"},
        {name:'instagram', to:"https://www.instagram.com/bigfood.ar/", icon:"logo-instagram", size:"1.3em", color:"white"},
        // {name:'facebook', to: "https://www.facebook.com/BigFood.ar", icon:"logo-facebook", size:"1.3em", color:"white"},
    ]
    return (
        <div className="min-h-screen flex flex-col w-screen ">
            <Header/>
            <div className="fixed right-0 top-1/2 transform -translate-y-1/2 h-auto w-auto bg-[#cea581] flex flex-col justify-center items-center py-2 rounded-tl-lg rounded-bl-lg z-[200]">
                {
                    buttons.map(button => (
                        <Link key={button.name} to={button.to} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-900 m-2 bg-[#004066]" >
                            <ion-icon name={button.icon} style={{fontSize:button.size, color:button.color}}></ion-icon>
                        </Link>
                    ))
                }
            </div>
            <main className="flex-grow min-z">{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout;