import React, { useEffect, useState } from 'react';
import { FooterBanner, HeroBanner, Product } from '../Components';
import { client } from '../lib/client'; // Import the urlFor function

export const Home = () => {

  const [products, setProducts] = useState([]);
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const query = '*[_type == "product"]';
        const bannerQuery = '*[_type == "banner"]';
        const [products, bannerData] = await Promise.all([
          client.fetch(query),
          client.fetch(bannerQuery),
        ]);
        setProducts(products);
        setBannerData(bannerData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product)=> <Product key=
        {product._id} product={product}/>)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </div>
  );
}

export default Home;
