import React from 'react'

import '../App.css';

function Hero(){
    return(
        <div className='hero'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterrean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
    )
}

function Main(){
    return(
        <main>
            <Hero/>
            <div className='bg-hero'/>
        </main>
    )
}

export default Main