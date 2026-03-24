import React from 'react';
import Features from './Features';

const PriceCards = ({ priceCard }) => {
    // console.log(priceCard)

    const {name, price, duration,features } =priceCard;
    return (
        <div className='flex flex-col border rounded-2xl bg-cyan-200 m-4 text-black p-4'>
            <div className='text-center'>
                <h1 className='text-3xl font-semibold'>{name}</h1>
                <h2 className='text-2xl font-medium'>${price}/{duration}</h2>
            </div>
            <h2 className='text-center text-2xl'></h2>
            <div className='bg-cyan-300 m-6 p-6 space-y-2.5 rounded-2xl flex-1'>
                {
                    features.map((feature, index)=><Features feature={feature}></Features>)
                }
            </div>
            <button className="btn  w-full">Subscribe</button>


        </div>
    );
};

export default PriceCards;