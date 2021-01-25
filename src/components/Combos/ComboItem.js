import React from "react";

import {
  API_URL,
  LINK_COMPRA,
  LINK_COMPPRA_WHATSAPP,
} from "../../utils/config";
const ComboItem = ({ item, viewCondicion }) => {
  const parsePrecio = (precio) => {
    if (precio.length < 3) return `S/ ${precio.toString()}.00`;
    else {
      return `S/ ${precio}`;
    }
  };
  return (
    <div className="col-12 comboItemContainer">
      <div className="col-12">
        <img
          src={`${API_URL}${item.img}`}
          alt={`${item.name} - Combo Cineviajero`}
        />
      </div>
      <h2>{item.title}</h2>

      <div className="description">
        {item.description.split("<br />").map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
      </div>

      <div className="detailContentCombo">
        <div className="col-7 col-md-12">
          <h4>Precio:</h4>
          <h3>{parsePrecio(item.precio)}</h3>
          {/*  item.comision === 0 ? <h6>NO INCLUYE COMISIÓN TICKETERA</h6> : null */}
          <h5 className="condicionesButton">Pagos solo con tarjetas de débito o crédito.</h5>
          <button
            className="condicionesButton"
            onClick={() => viewCondicion(item)}
          >
            CONDICIONES
          </button>
          
        </div>
        <div className="combo__buttons col-5 col-md-12">
          <button onClick={() => window.open(LINK_COMPRA, "_blank")}>
            Comprar
          </button>
          <button onClick={() => window.open(LINK_COMPPRA_WHATSAPP, "_blank")}>
            Pídelo por Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComboItem;
