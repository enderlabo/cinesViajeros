import React from "react";
import { useForm } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";

export const FilterMovies = (props) => {
  const { register, handleSubmit } = useForm();

  // const onSubmitFilter = (data) => {
  //   switch (data) {
  //     case data.hoy === "hoy":
  //       setFilter(data.hoy);
  //       break;
  //     case data.semanal === "semanal":
  //       setFilter(data.semanal);
  //       break;
  //     case data.proxima === "proxima":
  //       setFilter(data.proxima);
  //       break;
  //     default:
  //       break;
  //   }

  //   const filtered = Movies.map((p) => ({
  //     ...p,
  //     filtered: p.category.includes(filter),
  //   }));
  //   console.log(filtered)
  //   return setMoviesFilter(filtered);
  // };

  /* useEffect(() => {

    getDataWeekendMovies();

  }, []);
  console.log(Movies); */

  return (
    <div>
      <div className="cardFilter">
        <form onSubmit={handleSubmit(props.onSubmitFilter)}>
          <h6 className="filter-title">Programación </h6>
          <hr className="filter-hr" />
          <div className="filter-inputContain">
            <div className="filter-hoyCheck">
              <input
                className="form-check-input"
                type="checkbox"
                checked={props.filte === "hoy"}
                ref={register}
                id="hoy"
                name="hoy"
                value="hoy"
                onChange={(e) =>
                  props.setFilte(props.filte !== "hoy" ? e.target.value : null)
                }
              />
              <label className="form-check" htmlFor="hoy">
                Hoy
              </label>
            </div>
            <div className="filter-semanalCheck">
              <input
                className="form-check-input"
                type="checkbox"
                checked={props.filte === "semanal"}
                ref={register}
                id="semanal"
                name="semanal"
                value="semanal"
                onChange={(e) =>
                  props.setFilte(
                    props.filte !== "semanal" ? e.target.value : null
                  )
                }
              />
              <label className="form-check" htmlFor="semanal">
                Esta semana
              </label>
            </div>

            <div className="filter-proximoCheck">
              <input
                className="form-check-input"
                type="checkbox"
                checked={props.filte === "proxima"}
                ref={register}
                id="proxima"
                name="proxima"
                value="proxima"
                onChange={(e) =>
                  props.setFilte(
                    props.filte !== "proxima" ? e.target.value : null
                  )
                }
              />
              <label className="form-check" htmlFor="proxima">
                Próximamente
              </label>
            </div>
            <br />
          </div>
          <button type="submit" className="buttonApplyFilter">
            APLICAR FILTROS
          </button>
        </form>
      </div>
    </div>
  );
};
