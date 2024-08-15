import React from 'react'
import img from '../../assets/images/BannerBg.png';
import SmallBanner from '../../components/smallBanner';
import ProductList from './productList';
import Newsletter from '../home/newsletter';
const Products = () => {
  return (
    <section>
      <SmallBanner detail={true} detailTxt="Explore a Wide Range of Shipping Options" title="Our Products" img={img} className="bg-bottom" />
      <ProductList />
      <Newsletter />
    </section>
  )
}

export default Products
