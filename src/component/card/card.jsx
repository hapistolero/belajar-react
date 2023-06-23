import React from "react";

export const Card = (props) => {
    return(
        <div>
            <p>Nama: {props.name} </p>
            <p>Hobi: {props.hobi} </p>
        </div>
    )
}

Card.defaultProps ={
    name:'belum diisi',
    hobi:'belum diisi'
}