import React from 'react'
import { Link } from 'react-router-dom'

function Shipper () {  
    return (
        <div class="bg-white text-gray-100 px-8 py-12 ">
              <div
                class="max-w-screen-xl mt-5 px-8 grid gap-8 md:px-12 lg:px-16 xl:px-32 py-10 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                <ul class="steps steps-vertical lg:steps-horizontal">
                         <li class="step step-warning">Register</li>
                         <li class="step step-warning">Shipping Content</li>
                         <li class="step">Shipping Details</li>
                </ul>
                <div class="md:grid grid-cols-6">
                    <div class="col-span-1"></div>
                    <div class="col-span-4">
                <div class="text-gray-700 mt-8">
                      Hi,<span class="underline"> Username!</span> 
                </div>
                
                <div class="mt-6">
                    <span class="uppercase text-sm text-gray-600 font-bold">Name of Company</span>
                    <input class="w-full input input-bordered  text-gray-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"></input>
                </div>
               
                <div class="mt-6">
                    <span class="uppercase text-sm text-gray-600 font-bold">Company Addrress</span>
                    <input class="w-full input input-bordered  text-gray-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"></input>
                </div>
               
                             
                <div class="mt-6">
                <div class="flex flex-row mx-auto gap-4">
                    <span class="uppercase text-sm text-gray-600 font-bold mt-5">Location</span>
                    <select  placeholder="All New Zealand" class="w-full input input-bordered  text-gray-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline">
                        <option>All New Zealand</option>
                        <option>Northland</option>
                        <option>Auckland</option>
                        <option>Waikato</option>
                        <option>Bay of Plenty</option>
                        <option>Gisborne</option>
                        <option>Hawke's Bay</option>
                        <option>Taranaki</option>
                        <option>Manawatu/Whanganui</option>
                        <option>Wellington</option>
                        <option>Nelson/ Tasman</option>
                        <option>Marlborough</option>
                        <option>West Coast</option>
                        <option>Canterbury</option>
                        <option>Otago</option>
                        <option>Southland</option>
                    </select>
                    <select  placeholder="All New Zealand" class="w-full input input-bordered  text-gray-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline">
                        <option>Suburbs</option>
                    </select>
                </div>
                </div>

             
                <div class="mt-6">
                    <span class="uppercase text-sm text-gray-600 font-bold">Cut-Off Date</span>
                    <input class="w-full input input-bordered  text-gray-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline"
                      type="date"/>
                </div>

                <div class="w-full  mt-6">
                    <span class="uppercase text-sm text-gray-600 font-bold">CONTACT DETAILS</span>
                    <div class="flex flex-row mx-auto gap-4">
                    <input class="w-full input input-bordered text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Mobile" />
                    <input class="w-full input input-bordered text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Email" />
                      <input class="w-full input input-bordered text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Web" />
                    </div>
                    
                </div>
                <div class="mt-6">
                    <p>
                <label class="uppercase text-sm text-gray-600 font-bold mr-2">Service Available</label>
                    <input type="radio" name="radio-1" class="align-middle radio"/><label class="p-3">Pick-up</label>
                    <input type="radio" name="radio-1" class="align-middle radio"/><label class="p-3">Drop-off</label>
                    <input type="radio" name="radio-1" class="align-middle radio"/><label class="p-3">Both</label>
                   </p>
                </div>

                <div class="mt-6">
                    <p>
                <span class="uppercase text-sm text-gray-600 font-bold mr-2">Freight</span>
                    <input type="radio" name="radio-2" class="align-middle radio"/><label class="p-3">Air</label>
                    <input type="radio" name="radio-2" class="align-middle radio"/><label class="p-3">Sea</label>
                    <input type="radio" name="radio-2" class="align-middle radio"/><label class="p-3">Both</label>
                    </p>
                    </div>
                    

                 <div class="w-full mt-6">
                <span class="uppercase text-sm text-gray-600 font-bold mr-2">Box Sizes</span>
                <div></div><br/>
                <p><input type="checkbox" name="checked" class="checkbox align-middle"/>
                   <label class="p-2">Option A Box</label></p>
                    <input class="w-full input input-bordered text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Box Name A" />
                      <div class="flex flex-row mx-auto gap-4">
                    <input class="w-full input input-bordered text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Height" />
                    <input class="w-full input input-bordered text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Width" />
                      <input class="w-full input input-bordered text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Depth" />
                       <select  placeholder="All New Zealand" class="w-full input input-bordered  text-gray-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline">
                        <option>cm</option>
                        <option>mm</option>
                        <option>in</option>
                        </select>
                      </div>
                    </div>

                    <div class="w-full mt-6">
                <br/><input type="checkbox" name="checked" class="checkbox align-middle"/>
                   <span class="p-2">Option B Box</span>
                    <input class="w-full input input-bordered text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Box Name B" />
                      <div class="flex flex-row mx-auto gap-4">
                    <input class="w-full input input-bordered text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Height" />
                    <input class="w-full input input-bordered text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Width" />
                      <input class="w-full input input-bordered text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Depth" />
                        <select  placeholder="All New Zealand" class="w-full input input-bordered  text-gray-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline">
                        <option>cm</option>
                        <option>mm</option>
                        <option>in</option>
                        </select>
                      </div>
                    </div>




                <div class="mt-8 flex justify-end">
                    <Link to ="/shipperdetails">
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

    export default Shipper