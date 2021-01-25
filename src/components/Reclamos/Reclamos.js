import React from "react";
import { sendClaimForm } from "../../endpoints/index";
import { useForm, Controller, } from "react-hook-form";
import DatePicker from "react-datepicker";
// import DatePicker from 'react-date-picker';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faArrowDown,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

const Reclamos = () => {
  
  
  //DatePicker
  // const [startDate, setStartDate] = React.useState(null);
  const history = useHistory();
  const initialValues= {
    date: null
  }
  const { register, handleSubmit, control, errors } = useForm({
    defaultValues: initialValues,
    shouldFocusError: true,
  });
  const onSubmit = async (data) => {
    console.log(data)
    // JSON.stringify(data);
    try {
      let responseReq = await sendClaimForm(data);
      if (responseReq.status === "ok"){
        console.log("Send it", responseReq)
        history.push("/");
      } else {
        console.log("Not today...", responseReq);

      }
    } catch (error) {
      console.log(error);
    }
    //i can put one sweetAlert with an message: "thanks"
  };

  return (
    <>
      <div className="backgroundTrama">
        <div className="clain-container">
          {/* <div className="terminosCondiciones"> */}
          <div className="claim-firstTittle">
            <h1>Libro de Reclamaciones</h1>
          </div>
          <form
            className="claim-contain container"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="row">
              <div className="col-12 col-md-6 ">
                <p id="claim-h5">DATOS DEL CONSUMIDOR</p>
                <div className="claim-inputContain ">
                  <label id="nameLabel">Nombres</label>
                    <input
                      id="names"
                      type="text"
                      name="names"
                      control={control}
                      ref={register({
                        required: true,
                        minLength: 4,
                        maxLength: 20,
                      })}
                      placeholder="Escribe tus Nombres"
                    />
                  <div className="claim__wrapperIcon">
                    {errors.name ? (
                      <FontAwesomeIcon
                        className="claim_iconError"
                        icon={faTimesCircle}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="claim_iconCheck"
                        icon={faCheckCircle}
                      />
                    )}
                  </div>

                  <label id="addressLabel">Apellidos</label>
                    <input
                      type="text"
                      id="phone"
                      name="surnames"
                      ref={register({
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                      })}
                      placeholder="Escribe tus Apellidos"
                    />

                  <div className="claim_wrapperIcon">
                    {errors.surnames ? (
                      <FontAwesomeIcon
                        className="claim_iconError4"
                        icon={faTimesCircle}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="claim_iconCheck4"
                        icon={faCheckCircle}
                      />
                    )}
                  </div>

                  <label id="dniLabel">Tipo de Documento de Identidad</label>
                    <select name="type_document" ref={register} id="dni">
                      <option value="">Seleccione una opción</option>
                      <option value="dni">DNI</option>
                      <option value="ruc">RUC</option>
                      <option value="ce">CE</option>
                    </select>
                  <FontAwesomeIcon
                    className="claim_iconArrow"
                    icon={faArrowDown}
                  />

                  <label id="addressLabel">Número de Documento</label>
                    <input
                      id="phone"
                      type="text"
                      name="n_document"
                      ref={register({
                        required: true,
                        minLength: 8,
                        maxLength: 9,
                      })}
                      placeholder="Escribe tu número de documento"
                    />
                  <div className="claim_wrapperIcon">
                    {errors.n_document ? (
                      <FontAwesomeIcon
                        className="claim_iconError5"
                        icon={faTimesCircle}
                      />
                    ) : (
                      <FontAwesomeIcon
                        className="claim_iconCheck5"
                        icon={faCheckCircle}
                      />
                    )}
                  </div>
                </div>
              </div>
                <div className="claim-inputContain col-12 col-md-6">
                  <p id="claim-h6" style={{ color: "transparent" }}>
                    DATOS DEL CONSUMIDOR
                  </p>

                <label>Domicilio</label>
                  <input
                    type="text"
                    name="home"
                    ref={register({
                      required: true,
                      minLength: 4,
                      maxLength: 50,
                    })}
                    placeholder="Escribe tu Domicilio"
                  />
                <div className="claim_wrapperIcon">
                  {errors.home ? (
                    <FontAwesomeIcon
                      className="claim_iconError2"
                      icon={faTimesCircle}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="claim_iconCheck2"
                      icon={faCheckCircle}
                    />
                  )}
                </div>
                {/* Missing data/endPoint from distric of lima */}
                <label>Distrito</label>
                  <select name="distric" ref={register}>
                    <option value="lima">Seleccione una opción</option>
                    <option value="lima">Lima</option>
                  </select>
                <FontAwesomeIcon
                  className="claim_iconArrow5"
                  icon={faArrowDown}
                />

                <label>Teléfono</label>
                  <input
                    type="text"
                    name="telephone"
                    ref={register({
                      required: true,
                      minLength: 9,
                      maxLength: 12,
                    })}
                    placeholder="Escribe tu número telefónico"
                  />
                {errors.telephone ? (
                  <div className="claim_wrapperIcon">
                    <FontAwesomeIcon
                      className="claim_iconError3"
                      icon={faTimesCircle}
                    />
                  </div>
                ) : (
                  <div className="claim_wrapperIcon">
                    <FontAwesomeIcon
                      className="claim_iconCheck3"
                      icon={faCheckCircle}
                    />
                  </div>
                )}
                <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        maxLength: 40,
                      },
                    })}
                    placeholder="Escribe tu Email"
                  />
                <div className="claim_wrapperIcon">
                  {errors.email ? (
                    <FontAwesomeIcon
                      className="claim_iconError7"
                      icon={faTimesCircle}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="claim_iconCheck7"
                      icon={faCheckCircle}
                    />
                  )}
                </div>
              </div>
              <div className="claim-inputContain col-md-6 col-sm-12">
                <p className="claim-DetailP">DETALLES DEL RECLAMO</p>

                <label id="typeLabel">Tipo de Reclamación</label>
                <select name="type_claim" ref={register} id="claim">
                  <option value="">Seleccione una opción</option>
                  <option value="reclamo">Reclamo</option>
                  <option value="queja">Queja</option>
                </select>
                <FontAwesomeIcon
                  className="claim_iconArrow3"
                  icon={faArrowDown}
                />

                <label id="numTicketLabel">Número de E-Ticket</label>
                <input
                  id="numTicket"
                  type="text"
                  name="n_ticket"
                  ref={register({ required: true, minLength: 10, maxLength: 11 })}
                  placeholder="Escribe el número de E-ticket"
                />
                <div className="claim_wrapperIcon">
                  {errors.n_ticket ? (
                    <FontAwesomeIcon
                      className="claim_iconError8"
                      icon={faTimesCircle}
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="claim_iconCheck8"
                      icon={faCheckCircle}
                    />
                  )}
                </div>
              </div>
              <div className="claim-inputContain2 col-12 col-md-6">
                <label>Fecha del Incidente</label>
                    <Controller 
                      control={control}
                      name="date"
                      render={({ onChange, value }) => (
                        <DatePicker
                          ref={register}
                          placeholderText="Seleccione una fecha"
                          selected={value}
                          onChange={date => onChange(date)}
                        // rules={{required: true}}
                        />
                      )}
                    />
                    {/* <DatePicker
                      name="date"
                      ref={register({ required: true })}
                      control={ control }
                      placeholderText="Seleccione una fecha"
                      // rules={{required: true}}
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                        /> */}
                <FontAwesomeIcon
                  className="claim_iconArrow4"
                  icon={faCalendarAlt}
                />
                {errors.date && alert("Seleccione una fecha.")}

                <label>Monto Pagado</label>
                <input
                  type="text"
                  name="monto"
                  ref={register({ required: true, minLength: 2, maxLength: 4 })}
                  placeholder="Escribe el monto pagado"
                />
                {errors.monto ? (
                  <FontAwesomeIcon
                    className="claim_iconError9"
                    icon={faTimesCircle}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="claim_iconCheck9"
                    icon={faCheckCircle}
                  />
                )}
              </div>
              <div className="clain-textArea col-12 col-md-12">
                <label id="titleTextarea">
                  Descripción del reclamo o queja
                </label>
                <textarea
                  className="claim-textArea"
                  name="description"
                  ref={register}
                  placeholder="Escribe tu mensaje"
                  rows="3"
                ></textarea>
              </div>
              <br />
              <div className="claim-checkContain col-12 col-md-12 col-sm-12">
                <label className="claim-label">
                  Declaro ser titular del contenido del presente formulario,
                  manifestando bajo declaración jurada los hechos descritos en
                  él.
                </label>
                <input
                  className="claim-inputCheckbox"
                  name="checkBox1"
                  ref={register}
                  type="checkbox"
                  value="claimOwn"
                />
                {/* {errors.checkbox1 &&
                    alert("¿Declara ser titular del presente formulario?")} */}
              </div>
              <br />
              <div className="claim-checkContain2 col-12 col-md-12 col-sm-12">
                <label className="claim-label">
                  Acepto las politicas de privacidad
                </label>
                <input
                  className="claim-inputCheckb2"
                  name="checkBox2"
                  ref={register}
                  type="checkbox"
                  value="claimAccept"
                />
              </div>
              {/* {errors.checkbox2 && (
                  <p>¿Acepta las politicas de privacidad?</p>
                )} */}
              <br /> <br />
              <div className="claim-buttonContain col-12 col-md-12">
                <button
                  type="submit"
                  className="claim-button"
                  onClick={() => onSubmit()}
                >
                  ENVIAR
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reclamos;
