import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import slides from './../../json/slides.json'
import Categories from '../../components/Categories/Categories'
import Products from '../../components/Products/Products'

const Home = () => {
    return (
        <main>
            <Carousel slides={slides} />
            <Categories />
            <Products />
        </main>
    )
}

export default Home