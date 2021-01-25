import React, { useEffect, useState } from 'react';
import './index.scss';
import { getMovies, getMovieByString } from '../../api/movies';
import { Card } from '../../components/card';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import RestoreIcon from '@material-ui/icons/Restore';

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        getMovies().then(response => {
            setMovies(response)
        })
    }, [])

    const resetSearch = () => {
        getMovies().then(response => {
            setMovies(response)
        })
    }

    const requestSearch = () => {
        value && getMovieByString(value).then(response => {
            setMovies(response)
        })
    }

    return <div className="home">
       <div className="containerSearch">
            <InputBase
                placeholder="Pesquise"
                classes="input-search"
                value={value}
                onChange={(e)=>setValue(e.target.value)}
            />
            <IconButton type="submit" aria-label="pesquisa" onClick={()=>requestSearch()}>
                <SearchIcon />
            </IconButton>
            {
                value && <IconButton type="submit" aria-label="pesquisa" onClick={()=>resetSearch()}>
                    <RestoreIcon />
                </IconButton>
            }
        </div>
        <div className="listMovie">
            {
                movies?.map(movie => {
                    return movie?.show?.image?.medium && <Card banner={movie?.show?.image?.medium} description={movie?.show?.name} id={movie?.show?.id}/>
                })
            }
        </div>
    </div>
}