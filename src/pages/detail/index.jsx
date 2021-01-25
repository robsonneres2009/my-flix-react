import React, { useState, useEffect } from 'react';
import './index.scss';
import { getMovieById } from '../../api/movies';
import Grid from '@material-ui/core/Grid';
import {BackButton} from '../../components/backButton';

export const Detail = ({id}) => {
    const [data, setData] = useState(null)

    useEffect(()=>{
        getMovieById(id).then(response => {
            setData(response)
        })
    }, [])

    const renderDetails = () => {
        return <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <h1>{data?.name}</h1>
            </Grid>
            <Grid item xs={12} md={3}>
                <img src={data?.image?.medium} />
            </Grid>
            <Grid item xs={12} md={6}>
                <div dangerouslySetInnerHTML={{__html: data?.summary}}></div>
            </Grid>
        </Grid>
    }

    return <div className="detail">
        <BackButton to="/"/>
        {
            data ? renderDetails() : <p>Nenhuma informação encontrada!</p>
        }
    </div>
}