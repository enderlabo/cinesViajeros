import React from 'react'

import {API_URL, LINK_COMPRA} from '../../utils/config'
const PromocionItem = ({item,viewCondicion}) => {
    return(
        <div className="col-12 comboItemContainer">
            <div className="col-12">
                <img src={`${API_URL}${item.img}`} alt={`${item.name} - Combo Cineviajero`} />
            </div>
            <h2>
                {item.title}
            </h2>
          
            <div className="description">
            {item.description.split('<br />').map((item, i) => {
            return <p key={i}>{item}</p>}
                ) 
                }
            </div>
      
            <div className="detailContentCombo">
                <div className="col-7 col-md-12">
                    {
                       /*  item.comision === 0 ? <h6>NO INCLUYE COMISIÓN TICKETERA</h6> : null */
                    }
                    <button className="condicionesButton" onClick={()=>viewCondicion(item)}>
                        CONDICIONES
                    </button>
                </div>
                <div className="col-5 col-md-12" onClick={() => window.open(LINK_COMPRA, '_blank')}>
                    <button>
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PromocionItem;