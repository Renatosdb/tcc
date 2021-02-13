import React from 'react'
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from "../../components/CheckoutProduct";
import Subtotal from "../../components/Subtotal";
import './Checkout.css';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/32/br-consumables/2020/CarrinhoDeDesconto/page/496_carrinhodedescontos_banner-page_desktop_1500x210.jpg"
                    alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Seu carrinho esta vazio.</h2>
                        <p>Voce nao tem item no seu carrinho. Para comprar um ou mais items, clica no
                        "Adicionar ao carrinho abaixo do item que voce gostaria de levar."</p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Seu carrinho</h2>

                            {/* Listar todos os produtos no checkout */}
                            {basket?.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}

                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout
