import React, { useContext } from 'react'
import Layout from '../../components/Layout/Layout'
import MyContext from '../../context/data/MyContext'
import HeroSection from '../../components/HeroSection/HeroSection'
import Filter from '../../components/Filter/Filter'
import ProductCard from '../../components/ProductCard/ProductCard'
import Testimonial from '../../components/Testimonial/Testimonial'
import Track from '../../components/Track/Track'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart} from '../../redux/cartSlice'


function Home() {
    const dispatch = useDispatch();
    const cartItem = useSelector((state)=> state.cart)
  
    console.log(cartItem)
  
    const addCart = () => {
      dispatch(addToCart("shirt"));
    }
  
    const deleteCart = () => {
      dispatch(deleteFromCart("shirt"));
    }
   
  return (
    <Layout>
          <div className="flex gap-5 justify-center">
        
      </div>
        <HeroSection/>
        <Filter/>
        <ProductCard/>
        <Track/>
        <Testimonial/>
    </Layout>
  )
}

export default Home