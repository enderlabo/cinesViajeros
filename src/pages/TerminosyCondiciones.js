import React from 'react';

const TerminosyCondiciones = () => {
    return(
        <div className="backgroundTrama">
            <div className="terminosCondiciones container">
                <h1>
                    Términos y condiciones del AutoCINEMA by Cineviajeros
                </h1>
                <p>
                - La compra de entradas se realizarán únicamente vía online a través de Teleticket. 
                Recuerda no divulgar ni compartir tu entrada QR para que tu ingreso al Autocinema no se vea afectado. <br/><br/>
                - Antes de confirmar la compra de tu entrada, asegúrate de que el espectáculo, fecha, horario, ubicación y 
                precio sean correctos.  No se aceptarán cambios, devoluciones o reintegros de las entradas adquiridas. <br/><br/>
                - En el ingreso del Autocinema by Cineviajeros se tomará el control de temperatura a cada ocupante del auto, 
                en caso uno de ellos presente temperatura corporal mayor a 38 grados, se les invitará a retirarse y se 
                procederá a la reprogramación de la función a partir del día 15 de la primera visita. <br/><br/>
                {/* - Debido a la coyuntura actual no está permitido el ingreso a los grupos considerados de riesgo como: 
                personas mayores de 65 años y niños menores de 14 años, la empresa se reserva el derecho de admisión 
                por medidas de seguridad y protección. <br/><br/> */}
                -  Solo se permitirá un máximo de 4 personas por vehículo, según la cantidad de entradas compradas. <br/><br/>
                - Los clientes deberán permanecer dentro del auto y solo podrán salir para el uso de los servicios 
                higiénicos y en caso deseen realizar sus compras en la confitería. <br/><br/>
                - Solo podrán ingresar 2 personas como máximo a los servicios higiénicos y se deberá mantener el 
                distanciamiento de 1.5 metros. <br/><br/>
                - La venta de confitería será virtual y presencial. El recojo se realizará en el punto de despacho, 
                llevando el debido control de limpieza y seguridad, asimismo se debe mantener una distancia de 1.50 
                metros por persona.<br/><br/>
                - Los clientes que no respeten los controles y protocolo de seguridad o en su defecto incumplan con 
                las condiciones implementadas en el establecimiento como el control de temperatura, la desinfección de 
                manos, el distanciamiento social, el uso adecuado de mascarilla, etc., se procederá a solicitar el 
                retiro inmediato del establecimiento a todos los integrantes del vehículo.<br/><br/>
                </p>
            </div>
        </div>
    );
}

export default TerminosyCondiciones;