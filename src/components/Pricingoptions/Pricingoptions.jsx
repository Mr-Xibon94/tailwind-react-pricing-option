import React, { use } from 'react';
import PriceCards from './PriceCards';

const Pricingoptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    // console.log(pricingData);
    console.log('here is pricingData',pricingData);
    return (
        <div>
            <h1 className='text-4xl text-center'>Get Our Membership</h1>
            <div className='grid  md:grid-cols-4 '>
                {
                    pricingData.map((priceCard,index)=> <PriceCards key={index} priceCard={priceCard}></PriceCards>)
                }
            </div>
        </div>
    );
};

export default Pricingoptions;