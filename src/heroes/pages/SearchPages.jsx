import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';


export const SearchPages = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );

    const heroes = getHeroesByName(q);

    const showSearch = (q.length === 0 );
    const showError  = (q.length > 0 ) && heroes.length === 0;


    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        // if ( searchText.trim().length <= 1 ) return;

        navigate(`?q=${ searchText }`);
    }

    return (
        <>
            <h1>Busqueda</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                <h4>Resultados</h4>
                <hr />

                <form onSubmit={ onSearchSubmit }>
                    <input 
                    type="text" 
                    placeholder="Buscar un heroe"
                    className="form-control"
                    name="searchText"
                    autoComplete="off"
                    value={ searchText }
                    onChange={ onInputChange }
                />

                <button className="btn btn-outline-primary mt-2">
                    Buscar
                </button>
                </form>
            </div>

            <div className="col-7">
                <h4>Resultados</h4>
                <hr />

                {/* {
                    ( q === '' )
                    ?  <div className="alert alert-primary"> Buscar un heroe</div>
                    : ( heroes.length === 0 ) && <div className="alert alert-danger">No hay resultados <strong>{ q }</strong></div>
                } */}

                <div className="alert alert-primary animate__animated animate__fadeIn" 
                        style={{ display: showSearch ? '' : 'none' }}>
                    Buscar un heroe
                </div>

                <div className="alert alert-danger animate__animated animate__fadeIn" 
                        style={{ display: showError ? '' : 'none' }}>
                    No hay resultados <strong>{ q }</strong>
                </div>

                {
                    heroes.map( hero => (
                        <HeroCard key={ hero.id } {...hero}/>
                    ))
                }

            </div>
            </div>

        </>
    )
}
