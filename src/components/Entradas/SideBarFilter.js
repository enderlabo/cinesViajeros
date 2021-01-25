import React from 'react'
import { getAllMovies } from "../../endpoints";

export const SideBarFilter = () => {

    const [movies, setMovies] = React.useState(null);

    const getMovies = async () => {
        let data = await getAllMovies();
        if (data) setMovies(data);
      };

    React.useEffect(() => {
        getMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        
      }, []);
    return (
        <div className="container">
            <div className="row">
                <aside className="col-sm-4">
            <p>Filter 1</p>
                <div className="card">
                    <article className="card-group-item">
                        <header className="card-header">
                            <h6 className="title">Brands </h6>
                        </header>
                        <div className="filter-content">
                            <div className="card-body">
                                <form>
                                    {
                                        movies.map( filter => (
                                            <>
                                                <label className="form-check" >{filter.name}</label>
                                                    <input className="form-check-input" 
                                                    type="checkbox" value="false"
                                                    checked="" />
                                            </>

                                        ))
                                    }
                                </form>

                                </div> 
                            </div>
                        </article>
                    </div> 
                </aside> 
            </div> 
        </div>
       
    )
}
