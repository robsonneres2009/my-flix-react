import React from 'react';
import './index.scss';

export const Card = ({
    banner,
    description,
    id
}) => {
    return <article className="card">
        <a href={`detalhes/${id}`}>
        <figure className="banner">
            <img src={banner} alt={description}/>
        </figure>
        <header className="description">
            {description}
        </header>
        </a>
    </article>
}