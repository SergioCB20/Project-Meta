import React from 'react';
import {Link} from 'react-router-dom';

import HeroImg from "../../assets/icons_assets/restauranfood.jpg";
import CardImg1 from "../../assets/icons_assets/greek salad.jpg";
import CardImg2 from "../../assets/icons_assets/bruchetta.svg";
import CardImg3 from "../../assets/icons_assets/lemon dessert.jpg";
import '../../App.css';

function Hero(){
    return(
        <>
            <div className='bg-hero'/>
            <div className='hero'>
                <h1>Little Lemon</h1>
            <   img src={HeroImg} alt='Restaurant Food - Hero'/>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterrean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>
                    <Link to="/reservations">Reserve a table</Link>
                </button>
            </div>
        </>
    )
}

function Specials(){
    const cards =[
        {
            img: CardImg1,
            title: "Greek Salad",
            price: 12.99,
            descp:`The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, 
            garnished with crunchy garlic and rosemary croutons.`
        },
        {
            img: CardImg2,
            title: "Bruchetta",
            price: 5.99,
            descp:`Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with 
            salt and olive oil.`
        },
        {
            img: CardImg3,
            title: "Lemon dessert",
            price: 5.00,
            descp:`This comes straight from grandma’s recipe book, every last ingredient has been sourced and is
            as authentic as can be imagined.`
        }
    ]
    return(
        <div className='specials'>
            <div className='specials-header'>
                <h1>Specials</h1>
                <button>
                    <Link to="/menu">Online Menu</Link>
                </button>
            </div>
            <div className='card-container'>
                {cards.map((props)=>(
                <Card {...props}/>
                ))}
            </div>
        </div>
    )
}

function Card(props){
    return(
        <>
        <div className='card'>
            <img src={props.img}/>
            <div className='panel'>
                <h2>{props.title}</h2>
                <span>${props.price.toFixed(2)}</span>
            </div>
            <p>{props.descp}</p>
            <Link to="/order-online">
                Order a delivery
            </Link>
        </div>
        </>
    );
}

function Home(){
    return(
        <main>
            <Hero/>
            <Specials/>
        </main>
    )
}

export default Home