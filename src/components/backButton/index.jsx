import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './index.scss';

export const BackButton = ({to}) => {
    return <div onClick={()=>document.location.assign(to)} className="containerBackButton">
        <ArrowBackIosIcon/>
    </div>
}