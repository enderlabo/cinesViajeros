import React, { useState, useEffect } from "react";
import { getWeekMovies } from "../endpoints";
import { useForm } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";

export const Sandbox = () => {
  const getDataWeekendMovies = async () => {
    const data = await getWeekMovies();
    setMovies(data);
    setMoviesFilter(data);
  };
  const [ Movies, setMovies] = useState();
  //Filter
  const [moviesFilter, setMoviesFilter] = useState();
  const [filter, setFilter] = useState("");
  const { register, handleSubmit } = useForm();


  const onSubmitFilter = (data) => {
    switch (data) {
      case data.hoy === "hoy":
        setFilter(data.hoy);
        break;
      case data.semanal === "semanal":
        setFilter(data.semanal);
        break;
      case data.proximo === "proximo":
        setFilter(data.proximo);
        break;
      default:
        break;
    }

    const filtered = moviesFilter.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setMoviesFilter(filtered);
  };

  useEffect(() => {

    getDataWeekendMovies();

  }, [filter]);
  console.log(Movies);

  return (
    <>
      <div className="container">
        <aside className="col-sm-4">
          <div className="row">
            <div id="card">
              <article className="card-group-item">
                <div className="filter-content">
                  <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmitFilter)}>
                      <h6 className="filter-title">Programación </h6>
                      <hr className="filter-hr" />
                      <div className="filter-inputContain">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          ref={register}
                          id="hoy"
                          name="hoy"
                          value="hoy"
                          
                          onChange={(e) => setFilter(e.target.value)}
                        />
                        <label className="form-check" htmlFor="hoy">
                          Hoy
                        </label>

                        <input
                          className="form-check-input"
                          type="checkbox"
                          ref={register}
                          id="semanal"
                          name="semanal"
                          value="semanal"
                          
                          onChange={(e) => setFilter(e.target.value)}
                        />
                        <label className="form-check" htmlFor="semanal">
                          Esta semana
                        </label>

                        <input
                          className="form-check-input"
                          type="checkbox"
                          ref={register}
                          id="proximo"
                          name="proximo"
                          value="proximo"
                          
                          onChange={(e) => setFilter(e.target.value)}
                        />
                        <label className="form-check" htmlFor="proximo">
                          Próximamente
                        </label>
                        <br />
                      </div>
                      <button type="submit" className="buttonComprar">
                        Aplicar filtros
                      </button>
                    </form>

                    <br />
                    <div>
                      <div className="portfolio__container">
                        {
                          moviesFilter ? moviesFilter.map((item) =>
                            item.filtered === true ? (
                              <li key={item.id}>{item.title}</li>
                            ) : (
                              ""
                            )
                          )
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};
