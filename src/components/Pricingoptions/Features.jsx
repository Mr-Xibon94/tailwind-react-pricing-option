import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Features = ({feature}) => {
    console.log(feature);
    return (
        <p className='text-xl flex gap-1.5'><span><CircleCheckBig></CircleCheckBig> </span>{feature}</p>
    );
};

export default Features;