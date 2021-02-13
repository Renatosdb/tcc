import React from 'react'
import './Home.css';
import Product from '../../components/Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src="https://webspaceinc.org/wp-content/uploads/2020/01/ecommerce-banner.png" />

            {/* Id, titulo, preco, rating e imagem do producto */}
            <div className="home_row">
                <Product
                    id="123555"
                    title="Brinco"
                    price={20.99}
                    rating={3}
                    image="https://cdn.awsli.com.br/600x450/294/294328/produto/32934175/f7d5e4a079.jpg"
                />
                <Product
                    id="123345"
                    title="Brinco"
                    price={380.99}
                    rating={4}
                    image="https://cdn.awsli.com.br/600x450/294/294328/produto/46059431/f014fa867c.jpg"
                />
                <Product
                    id="123345"
                    title="Brinco"
                    price={380.99}
                    rating={4}
                    image="https://cdn.awsli.com.br/600x450/294/294328/produto/46059431/f014fa867c.jpg"
                />
                <Product
                    id="123345"
                    title="Brinco"
                    price={380.99}
                    rating={4}
                    image="https://cdn.awsli.com.br/600x450/294/294328/produto/46059431/f014fa867c.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                    id="1234335"
                    title="Brinco"
                    price={200.99}
                    rating={2}
                    image="https://www.safira.com.br/cdn/imagens/produtos/det/brinco-em-prata-com-pedra-verde-238eb761624cab7202b7baa94c505a87.jpg"
                />
                <Product
                    id="1235645"
                    title="Brinco"
                    price={15.99}
                    rating={5}
                    image="https://img.elo7.com.br/product/244x194/33B0DA0/brinco-bianca-estilo.jpg"
                />
                <Product
                    id="1237845"
                    title="Brinco"
                    price={50.99}
                    rating={5}
                    image="https://img.elo7.com.br/product/244x194/33BDFC5/brinco-pedra-azul-turquesa-bijuterias.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                    id="12387645"
                    title="Brinco"
                    price={130.99}
                    rating={1}
                    image="https://blog.stylewe.com/wp-content/uploads/2017/02/ss-090617-jolie-academyawards.today-ss-slide-desktop.jpg"
                />
                {/* Produtos */}
            </div>
        </div>
    );
}

export default Home
