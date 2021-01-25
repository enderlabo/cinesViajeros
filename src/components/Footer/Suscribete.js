import React from 'react';
import {sendSuscribe} from '../../endpoints';
const Suscribete = () => {
    const [email, setEmail] = React.useState('')
    const [response, setResponse] = React.useState(false)
    const [responseError, setResponseError] = React.useState(false)
     const sendAction = async () => {
         // eslint-disable-next-line
        const regexEmail = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        if (!regexEmail.test(String(email).toLowerCase())) {
            setResponseError(true)
        }else{
            setResponseError(false)
            let responseRequest = await sendSuscribe(email);
            if(responseRequest){
                if(responseRequest.status === 'ok'){
                    setResponse(true)
                    setEmail('')
                }else{
                    setResponse(false)
                }
            }
        }
    }

    return(
        <section className="suscribeteSection container-fluid">
            <div className="content">
                   <div className="col-12 text-center">
                        <h2>Suscríbete a <span>Autocinema</span></h2>
                    </div> 
                    <div className="col-12 inputSect text-center">
                        <input 
                            type="email" 
                            placeholder="Ingresa tu correo electrónico" 
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            disabled={response} 
                        />
                        <button onClick={() => sendAction()} disabled={response}>
                            Suscribirse
                        </button>
                    </div>
                    {
                        response ? 
                           ( <h4>
                            Gracias por suscribirse
                        </h4>
                        ) : responseError ? 
                        <h4>
                           Ingrese un correo electrónico válido
                        </h4> : null
                    }
            </div>
        </section>
    );
}

export default Suscribete;