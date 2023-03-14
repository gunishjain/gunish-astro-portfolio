import React from 'react'
import { useState } from 'react';
import CarouselComp from "./CarouselComp";

function CarouselHeader() {

const [category, setCategory] = useState('photo');

    const changeCat=(cat)=>{
        setCategory(cat)
    }

  return (
    <div><div className="navbar bg-base-300 rounded-box">
        <div className="flex-1 px-2 lg:flex-none">
            <a className="text-lg font-bold">Creative Work</a>
        </div> 
                <div className="flex justify-end flex-1 px-2">
                    <div className="flex items-stretch">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} class="btn btn-ghost rounded-btn">Category</label>
                        <ul tabIndex={0} class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                        <li onClick={()=>changeCat('photo')}><a>Photography</a></li> 
                        <li onClick={()=>changeCat('design')}><a>Design Work</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                
            </div>
            <div class='my-2'>
                <CarouselComp category={category}/>
            </div>
    </div>
        
 
  )
}

export default CarouselHeader