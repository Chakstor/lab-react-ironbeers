import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

// Service
import { getBeer, getRandomBeer } from '../service';

// Components
import { Loading } from '../components/helpers/Loading';

export const BeerDetails = ({ random }) => {
    const [beer, setBeer] = useState();
    const { beerId } = useParams();

    useEffect(() => {
        random ?
            getRandomBeer().then(res => setBeer(res)) :
            getBeer(beerId).then(res => setBeer(res));
    }, [beerId, random]);

    return (
        <>
            {
                beer ?
                    <article className="beer-details">
                        <div className="beer-details__img-wrapper">
                            <img src={beer.image_url} width="110" alt="" />
                        </div>
                        <div className="beer-details__content">
                            <header className="beer-details__header">
                                <h1 className="beer-details__header__name">{beer.name}</h1>
                                <div className="beer-details__header__attenuation_level">{beer.attenuation_level}</div>
                                <div className="beer-details__header__tagline">{beer.tagline}</div>
                                <div className="beer-details__header__first-brewed">{beer.first_brewed}</div>
                            </header>
                            <div className="beer-details__body">
                                <p>{beer.description}</p>
                            </div>
                            <footer className="beer-details__footer">
                                <small>{beer.contributed_by}</small>
                            </footer>
                        </div>
                    </article> :
                    <Loading />
            }
        </>
    )
}