import React from "react";
import MakeReservationBtn from "../components/makeReservationBtn";


const Home = () => {
    return (
        <div className="w-[100vw]  pb-6">
            <div>
                <img src={`${process.env.PUBLIC_URL}/img/35Big Foods_edited2.jpg`} alt="burger" className='lg:w-[100%]'/>
            </div>
            <div className="px-6 lg:px-[15%] lg:py-[5%]">
                <div className="grid grid-col-1 lg:grid-cols-2 gap-4">
                    <div className="">
                        <div id="Home" className="text-xl sm:text-2xl tracking-widest whitespace-nowrap max-w-[100%] ">
                            <strong>LA HISTORIA</strong> DE BIG FOOD
                        </div>
                        <br/>
                        {/* <div className="text-justify text-md  font-semibold">
                        BIG FOOD se encuentra en una impresionante edificación antigua de mediados de siglo XIX en el corazón de Palermo Soho, frente a la Plaza Armenia. La ventana alta y profunda de madera abisagrada y la persiana de metal también abisagrada son características notables del edificio, así como la puerta principal de hierro forjado de época con detalles artísticos impresionantes. Además, el techo abovedado con ladrillo a la vista y los tirantes pertenecientes a antiguos rieles ferroviarios agregan un toque rupestre y ecléctico al ambiente del restaurante. Ven a celebrar cualquier ocasión especial en BIG FOOD, desde cumpleaños hasta
                        reuniones de trabajo. Nuestro restaurante cuenta con espacios amplios y acogedores, ideales para disfrutar con amigos y familiares.Además, nuestro equipo estará encantado de ayudarte a organizar y personalizar tu evento para que sea un éxito. Ya sea que desees un menú personalizado o un espacio privado para tu grupo, estamos dispuestos a hacer que tu experiencia sea inolvidable.
                        </div> */}
                            <div className="text-justify text-md  font-semibold">
                            Ubicado en una majestuosa edificación del siglo XIX en el vibrante corazón de Palermo Soho, frente a la Plaza Armenia, se encuentra BIG FOOD, un restaurante de fusión argentino-venezolano. Este establecimiento se distingue por su ventana alta y profunda de madera abisagrada y su persiana de metal, ambas características notables de la arquitectura de la época. La puerta principal de hierro forjado, con sus impresionantes detalles artísticos, invita a los visitantes a entrar.
                            <br/>
                            <br/>
                            El interior del restaurante ofrece un ambiente ecléctico y rústico, gracias al techo abovedado con ladrillo a la vista y los tirantes que alguna vez fueron parte de antiguos rieles ferroviarios. En BIG FOOD, cada ocasión se convierte en una celebración especial, desde cumpleaños hasta reuniones de trabajo.
                            <br/>
                            <br/>
                            Nuestro restaurante cuenta con espacios amplios y acogedores, ideales para disfrutar en compañía de amigos y familiares. Además, nuestro dedicado equipo estará encantado de ayudarte a organizar y personalizar tu evento para garantizar su éxito. Ya sea que desees un menú personalizado o un espacio privado para tu grupo, estamos comprometidos en hacer que tu experiencia en BIG FOOD sea inolvidable.
                            </div>                     
                    </div>
                    <div className="lg:pl-[5%] lg:py-[2%]">
                        <img src={`${process.env.PUBLIC_URL}/img/home_table.png`} alt="burger" className='w-[100%]'/> 
                    </div>
                </div>
                <div className="text-center py-[2%]">
                    <img src={`${process.env.PUBLIC_URL}/img/home_lights.png`} alt="burger" className='w-[100%]'/>
                </div>
                <div className="py-[5%]">
                    <div className="text-justify text-md  font-semibold">
                        ¡En BIG FOOD, te ofrecemos más que una cena,  una experiencia única! Ven con tu familia, amigos o pareja y siéntete transportado en el tiempo y el espacio mientras disfrutas de nuestras deliciosas comidas. Podrás sentirte como
                        si estuvieras en una selva, una cueva o una cabaña Andina, ¡todo sin salir de la ciudad! Además, estamos cerca de ti, por
                        lo que puedes vivir esta experiencia inolvidable sin tener que ir muy lejos. ¡Ven y descubre todo lo que tenemos para ofrecerte en BIG FOOD! Te sentirás como si estuvieras explorando las Cuevas de las manos en Santa Cruz o las Cuevas de Altamira en España, gracias a las fascinantes pinturas rupestres en nuestras paredes. Además, nuestro piso de adoquín y
                        fuente de agua crean un ambiente perfecto para disfrutar de los manjares de nuestro chef en una de nuestras mesas redondas únicas, hechas a partir de una rueda de tractor a vapor de 1865. ¡No te pierdas esta experiencia inolvidable en
                        nuestro restaurante!
                        <br />
                        <br/>
                        
                        ¡En nuestro restaurante, te invitamos a disfrutar de la belleza natural del pulmón verde! Este espacio se encuentra entre
                        dos salones y ofrece un ambiente al aire libre donde puedes disfrutar de la frescura de un hermoso árbol y un jardín vertical
                        con plantas colgantes. Te sentirás como si estuvieras en un entorno natural.
                    </div>
                </div>
                <div className="text-center py-[2%]">
                    <MakeReservationBtn />
                </div>

            </div>
           {/*  <div>
                <img src={`${process.env.PUBLIC_URL}/img/home_burger.png`} alt="burger" className='w-[100%]'/>
            </div>
            <div className="px-[15%] py-[5%]">
                <div className="flex ">
                    <div className="w-[50%] pr-[5%] ">
                        <div className="text-[1.8em] tracking-widest whitespace-nowrap">
                            <strong>LA HISTORIA</strong> DE BIG FOOD
                        </div>
                        <br/>
                        <div className="text-justify text-md  font-semibold">
                        BIG FOOD se encuentra en una impresionante edificación antigua de mediados de siglo XIX en el corazón de Palermo Soho, frente a la Plaza Armenia. La ventana alta y profunda de madera abisagrada y la persiana de metal también abisagrada son características notables del edificio, así como la puerta principal de hierro forjado de época con detalles artísticos impresionantes. Además, el techo abovedado con ladrillo a la vista y los tirantes pertenecientes a antiguos rieles ferroviarios agregan un toque rupestre y ecléctico al ambiente del restaurante. Ven a celebrar cualquier ocasión especial en BIG FOOD, desde cumpleaños hasta
                        reuniones de trabajo. Nuestro restaurante cuenta con espacios amplios y acogedores, ideales para disfrutar con amigos y familiares.Además, nuestro equipo estará encantado de ayudarte a organizar y personalizar tu evento para que sea un éxito. Ya sea que desees un menú personalizado o un espacio privado para tu grupo, estamos dispuestos a hacer que tu experiencia sea inolvidable.
                        </div>
                    </div>
                    <div className="w-[50%] pl-[5%] py-[2%]">
                        <img src={`${process.env.PUBLIC_URL}/img/home_table.png`} alt="burger" className='w-[100%]'/> 
                    </div>
                </div>
                <div className="text-center py-[2%]">
                    <img src={`${process.env.PUBLIC_URL}/img/home_lights.png`} alt="burger" className='w-[100%]'/>
                </div>
                <div className="py-[5%]">
                    <div className="text-justify text-md  font-semibold">
                        ¡En BIG FOOD, te ofrecemos más que una cena, <span className="line-through">te brindamos</span>  una experiencia única! Ven con tu familia, amigos o pareja y siéntete transportado en el tiempo y el espacio mientras disfrutas de nuestras deliciosas comidas. Podrás sentirte como
                        si estuvieras en una selva, una cueva o una cabaña Andina, ¡todo sin salir de la ciudad! Además, estamos cerca de ti, por
                        lo que puedes vivir esta experiencia inolvidable sin tener que ir muy lejos. ¡Ven y descubre todo lo que tenemos para ofrecerte en BIG FOOD! Te sentirás como si estuvieras explorando las Cuevas de las manos en Santa Cruz o las Cuevas de Altamira en España, gracias a las fascinantes pinturas rupestres en nuestras paredes. Además, nuestro piso de adoquín y
                        fuente de agua crean un ambiente perfecto para disfrutar de los manjares de nuestro chef en una de nuestras mesas redondas únicas, hechas a partir de una rueda de tractor a vapor de 1865. ¡No te pierdas esta experiencia inolvidable en
                        nuestro restaurante!
                        <br />
                        ¡En nuestro restaurante, te invitamos a disfrutar de la belleza natural del pulmón verde! Este espacio se encuentra entre
                        dos salones y ofrece un ambiente al aire libre donde puedes disfrutar de la frescura de un hermoso árbol y un jardín vertical
                        con plantas colgantes. Te sentirás como si estuvieras en un entorno natural.
                    </div>
                </div>
                <div className="text-center py-[2%]">
                    <MakeReservationBtn />
                </div>

            </div> */}
        </div>
    )
}

export default Home;