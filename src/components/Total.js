import React from 'react'

const Total = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Total:</h1>
            <h2>{props.cars.length}</h2>
        </div>
    )
}

export default Total