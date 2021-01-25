import React from 'react'

const HorarioMovie = ({movie}) =>{
    const parsePrecio = (precio) => {
        if(precio.length < 3)
        return `S/ ${precio.toString()}.00`
        else{
            return precio
        }
    }
    const checkDate = (date, hora) => {
        let arrayDate = date.split('/');
        let newDate = new Date(`${arrayDate[1] < 10 ? '0'+arrayDate[1]: arrayDate[1]}/${arrayDate[0]}/${arrayDate[2]} ${hora}`).getTime()
        return newDate;
    }
    const formateDate = (date) => {
        let arrayDate = date.split('/');
        /* return `${arrayDate[0]}/${arrayDate[1] < 10 ? '0'+arrayDate[1]: arrayDate[1]}` */
        return `${arrayDate[0]}`
    }
    return(
        <div className="scheduleMovieContainer row">
            <div className="col-12">
                <h1>
                    {movie.title}
                </h1>
                <h6>
                    Información de horarios
                </h6>
            </div>
            {
                movie ? (
                    movie.horario.map((horario,index) => {
                        let today = new Date().getTime();
                        //console.log("HorarioMovie -> today", today);
                        let fechaHorario = checkDate(horario.fecha, horario.hora);
                        console.log("HorarioMovie -> fechaHorario", fechaHorario)
                        if(!(today >= fechaHorario)){
                            return(
                                <div className="col-12 scheduleItemMovie" key={index}>
                                    <div className="dateMovieContainer">
                                        <h3>
                                            {horario.day} {formateDate(horario.fecha)}
                                        </h3>
                                        <h2>
                                            {horario.hora}
                                        </h2>
                                        <h6>
                                            {horario.idioma}
                                        </h6>
                                    </div>
                                    <div className="priceMovieContainer">
                                        <h3>
                                            Precio:
                                        </h3>
                                        <h2>
                                            {parsePrecio(horario.precio)}
                                        </h2>
                                    </div>
                                </div>
                            )
                        }else{
                            //console.log('Horario vencido')
                            return null;
                        } 
                    }
                    )
                ) : null
            }
            <div className="detalleHorarios col-12">
                Si quiere seleccionar una función, haga clic en comprar
            </div>
        </div>
    )
}

export default HorarioMovie;