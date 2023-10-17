import { useState } from 'react';
import './styles/index.css'

import overshirts from './images/Overshirts.png';
import knitwear from './images/Knitwear.png';
import fleece from './images/fleece.png';

const squares = [overshirts, knitwear, fleece]

export function ThreeSquares() {
    return <>
        <div className='cards-container'>
            {squares.map((square) => {
                return <Card src={square} />
            })}
        </div>
    </>
}

function Card({src}) {
    return <>
    <div className='square-container'>
        <img src={src} alt="" />
    </div>
    </>
}