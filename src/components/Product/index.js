import React from 'react';
import './Product.css';
import { useStateValue } from "../../StateProvider";

function Product({ id, title, image, price, rating }) {
    const [{ }, dispatch] = useStateValue();

    const addToBasket = () => {
        // add items no carrinho (basket)
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={`index-${i}`}>&#9889;</p>
                    ))}
                </div>
            </div>

            <img src={image}></img>
            <button onClick={addToBasket}>Adicionar ao carrinho.</button>
        </div>
    )
}

export default Product
