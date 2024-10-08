import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {

    // if ( alter_ego === characters) return(<></>);
    // return (<p>{characters}</p>);
    return ( alter_ego === characters )
    ? <></>
    : <p>{characters}</p>;

}

export const HeroCard = ({ 

        id,
        superhero, 
        publisher, 
        alter_ego,
        first_appearance,
        characters,

    }) => {

    //Para cargar las imagenes creo una variable heroImageUrl, que memorice
    const heroImageUrl = `/assets/heroes/${ id }.jpg`;
    /* Cuando el alterego ysuperhero son el mismo, no hace falta poner el personaje y asi se arregla
       1na manera es creando un componenete, esta es la mejor manera para hacerlo, creamos una const y creando directamente un jsx */
    // const charactersByHero = (<p>{characters}</p>);


    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">

                    <div className="col-4">
                        <img className="card-img" src={ heroImageUrl } alt={ superhero } />
                    </div>


                    <div className="col-8">
                        <div className="card-body">

                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>

                            {/* Cuando el alterego ysuperhero son el mismo, no hace falta poner el personaje y asi se arregla
                            1na manera es creando un componenete */}
                            {/* {
                                ( alter_ego !== characters ) && charactersByHero
                                ( alter_ego !== characters ) && <p>{ characters }</p>
                            } */}
                            <CharactersByHero characters={ characters } alter_ego={ alter_ego }/>
                            
                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>

                            <Link to={`/hero/${ id }`}>
                                Mas...
                            </Link>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
