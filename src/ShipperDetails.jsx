import React from 'react'
import { Link } from 'react-router-dom'

function ShipperDetails () {  
    return (
        <div class="bg-white text-gray-100 px-8 py-12 md:mb-60">
              <div
                class="max-w-screen-xl mt-5 px-8 grid gap-8 md:px-12 lg:px-16 xl:px-32 py-10 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                <ul class="steps steps-vertical lg:steps-horizontal">
                         <li class="step step-warning">Register</li>
                         <li class="step step-warning">Shipping Content</li>
                         <li class="step step-warning">Shipping Details</li>
                </ul>
                <div class="md:grid grid-cols-6">
                    <div class="col-span-1"></div>
                    <div class="col-span-4">
                <div class="text-gray-700 mt-8 ">
                      Hi,<span class="underline"> Username!</span> 
                </div>
                
                <div class="mt-6 grid grid-cols-4">
                    <span class="uppercase text-sm text-gray-600 font-bold">Name of Company</span>
                    <p class="text-m text-gray-700 ">UMAC Cargo New Zealand</p>
                </div>
               
                <div class="mt-6 grid grid-cols-4">
                    <span class="uppercase text-sm text-gray-600 font-bold">Company Addrress</span>
                    <p class="text-m text-gray-700 ">18/375 East Tamaki Road, East Tāmaki, Auckland 2013</p>
                </div>
               
                             
                <div class="mt-6 grid grid-cols-4">
                    <span class="uppercase text-sm text-gray-600 font-bold">Location</span>
                    <p class="text-m text-gray-700 ">East Tamaki, Auckland</p>
                </div>

             
                <div class="mt-6 grid grid-cols-4">
                    <span class="uppercase text-sm text-gray-600 font-bold">Cut-Off Date</span>
                    <p class="text-m text-gray-700 ">12-Aug-2022</p>
                </div>

                <div class="mt-6 grid grid-cols-4">
                    <span class="uppercase text-sm text-gray-600 font-bold">CONTACT DETAILS</span>
                    <p class="text-m text-gray-700 ">021-991-910</p>
                    <p class="text-m text-gray-700 ">info@email.com</p>
                    <p class="text-m text-gray-700 ">wwww.domain.com</p>
                  
                   
                    
                </div>

                <div class="mt-6 grid grid-cols-4">
                <span class="uppercase text-sm text-gray-600 font-bold mr-2">Service Available</span>
                <p class="text-m text-gray-700 ">Both</p>
                   
                    </div>

                    <div class="mt-6 grid grid-cols-4">
                <span class="uppercase text-sm text-gray-600 font-bold mr-2">Freight</span>
                <p class="text-m text-gray-700 ">Both</p>
                    </div>
                
              

                    <div class="mt-6 grid grid-cols-6">
                <span class="uppercase text-sm text-gray-600 font-bold mr-2">Box Sizes</span>
                   <p class="upppercase text-gray-700 font-bold">Option A Box</p>
                   <p class="text-m text-gray-700 ">Regular Box: 23" x 20" x 17"</p>
                   <p class="upppercase text-gray-700 font-bold">Option B Box</p>
                   <p class="text-m text-gray-700 ">Jumbo Box: 23" x 20" x 23"</p>
                    </div>



                <div class="mt-8 flex justify-end gap-2">
                <Link to ="/shipper">
                    <button
                      class="btn btn-warning no animation focus:outline-none focus:outline-shadow">
                      Edit
                    </button>
                    </Link>

                    <Link to ="/">
                    <button
                      class="btn btn-warning no animation focus:outline-none focus:outline-shadow">
                      Confirm
                    </button>
                    </Link>
                </div>
                </div>
                </div>
                  
                </div>
                    

                    <div class="col-span-1"></div>

                
               </div>
            
    

    )
}

    export default ShipperDetails