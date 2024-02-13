import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Reservas = () => {
  const [nombre, setNombre] = useState("");
  const [compania, setCompania] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [fechaHora, setFechaHora] = useState("");
  const [cantidadPersonas, setCantidadPersonas] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      nombre,
      compañia: compania || "",
      email,
      telefono: telefono || "",
      mensaje,
      fecha_hora: fechaHora || "",
      cantidad_personas: cantidadPersonas || "",
    };

    const emailjsApiKey = process.env.REACT_APP_EMAILJS_API_KEY;
    const emailServiceToken = process.env.REACT_APP_EMAIL_SERVICE_TOKEN;
    const emailTemplateToken = process.env.REACT_APP_EMAIL_TEMPLATE_TOKEN;

    emailjs
      .sendForm(emailServiceToken, emailTemplateToken, form.current, emailjsApiKey)
      .then((response) => {
        console.log("Correo electrónico enviado:", response.status, response.text);
        // Restablecer los campos del formulario después del envío
        setNombre("");
        setCompania("");
        setEmail("");
        setTelefono("");
        setMensaje("");
        setFechaHora("");
        setCantidadPersonas("");
        setShowSuccessMessage(true);
        setShowErrorMessage(false);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico:", error);
        setShowSuccessMessage(false);
        setShowErrorMessage(true);
      });
  };

  return (
    <div className="px-6 lg:px-[15%] py-6 lg:py-[5%]">
      <div className="text-center">
        <div className="text-2xl sm:text-4xl  whitespace-nowrap font-bold py-8 text-[#044066]">
          Contacto y Reservas
        </div>
        <div className="custom_separator lg:w-[15%] h-[1.5px]"></div>
        <div className="py-8 font-semibold">
          Complete el formulario de contacto con todos los datos solicitados para que desde Big Food
          <br />
          podamos contactarle y generar la reserva o ayudarle con lo que necesite.
          <br />
          Le estaremos brindando una respuesta a la brevedad.
          <br />
          <span className="italic">No olvides aclarar el motivo de tu contacto.</span>
        </div>
      </div>

      <div className="mt-8 p-6 lg:p-16 rounded-xl lg:rounded-[2.5em]" style={{ boxShadow: "0px 0px 6px 6px rgba(0,0,0,0.07)" }}>

        <form onSubmit={handleSubmit} ref={form}>
            <div className="grid grid-col-1 lg:grid-cols-2 gap-4">
              <div className=" lg:px-5">
                <label className="ml-2 text-sm font-bold">
                  Nombre y Apellido <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="p-6 bg-[#f5f5f5] text-gray-500 text-sm rounded-[1em] block w-full my-3 h-[4em]"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div className=" lg:px-5">
                <label className="ml-2 text-sm font-bold">
                  Compañía <span className="text-gray-600 font-normal tracking-wide"> (opcional) </span>
                </label>
                <input
                  type="text"
                  className="p-6 bg-[#f5f5f5] text-gray-500 text-sm rounded-[1em] block w-full my-3 h-[4em]"
                  name="compañia"
                  value={compania}
                  onChange={(e) => setCompania(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-col-1 lg:grid-cols-2 gap-4">
              <div className=" lg:px-5">
                <label className="ml-2 text-sm font-bold">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  className="p-6 bg-[#f5f5f5] text-gray-500 text-sm rounded-[1em] block w-full my-3 h-[4em]"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className=" lg:px-5">
                <label className="ml-2 text-sm font-bold">Telefono </label>
                <input
                  type="number"
                  className="p-6 bg-[#f5f5f5] text-gray-500 text-sm rounded-[1em] block w-full my-3 h-[4em]"
                  name="telefono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full lg:px-5">
              <label className="ml-2 text-sm font-bold">
                Mensaje <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="p-6 bg-[#f5f5f5] text-gray-500 text-sm rounded-[1em] block w-full my-3 h-[4em]"
                name="mensaje"
                value={mensaje}
                onChange={(e) => {
                  const value = e.target.value;
                  const cleanValue = value.replace(/[#{}[\]=></`*+-]/g, "");
                  setMensaje(cleanValue);
                }}
                required
              />
            </div>

            <div className="lg:px-5 py-8 ml-2 font-bold">En caso de querer hacer una reserva por favor indicanos los siguientes datos:</div>

            <div className="grid grid-col-1 lg:grid-cols-2 gap-4 w-full mt-6">
              <div className=" lg:px-5">
                <label className="ml-2 text-sm font-bold">Fecha y hora </label>
                <input
                  type="datetime-local"
                  className="p-6 bg-[#f5f5f5] text-gray-500 text-sm rounded-[1em] block w-full my-3 h-[4em]"
                  name="fecha_hora"
                  value={fechaHora}
                  onChange={(e) => setFechaHora(e.target.value)}
                  min={new Date().toISOString().slice(0, 16)}
                />
              </div>
              <div className=" lg:px-5">
                <label className="ml-2 text-sm font-bold">Cantidad de personas </label>
                <input
                  type="number"
                  className="p-6 bg-[#f5f5f5] text-gray-500 text-sm rounded-[1em] block w-full my-3 h-[4em]"
                  name="cantidad_personas"
                  value={cantidadPersonas}
                  onChange={(e) => setCantidadPersonas(e.target.value)}
                />
              </div>
            </div>

            <div className="pt-12 text-center text-sm">
            <input
                className="btn_custom-submit"
                type="submit"
                value="Enviar Formulario"
                disabled={!nombre || !email || !mensaje}
              />
            </div>
        </form>

        {showSuccessMessage && (
          <div className="text-green-500 font-bold text-center mt-4">
            ¡El formulario se envió con éxito!
          </div>
        )}

        {showErrorMessage && (
          <div className="text-red-500 font-bold text-center mt-4">
            ¡Hubo un error al enviar el formulario! Por favor, inténtalo de nuevo más tarde.
          </div>
        )}

      </div>
    </div>
  );
};

export default Reservas;
