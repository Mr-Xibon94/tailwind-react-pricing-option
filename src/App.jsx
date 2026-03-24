import { Suspense } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Pricingoptions from './components/Pricingoptions/Pricingoptions';

function App() {

  const pricingPromise = fetch('pricingData.json')
        .then(res => res.json());


  return (
    <>
      <Navbar></Navbar>

    
        <Suspense fallback={<div className='flex min-h-screen items-center justify-center'>
          <span className=" loading loading-spinner loading-lg"></span>
        </div>}>
        <Pricingoptions pricingPromise={pricingPromise}></Pricingoptions>
      </Suspense>
  
      
    </>
  )
}

export default App
