import React from 'react'

function Planner () {  
    return (
        <div class="bg-white text-gray-100 px-8 py-12 ">
              <div
                class="max-w-screen-xl mt-5 px-8 grid gap-8 md:px-12 lg:px-16 xl:px-32 py-10 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                <ul class="steps steps-vertical lg:steps-horizontal">
                         <li class="step step-warning">Register</li>
                         <li class="step step-warrning">Plan Your Box</li>
                         <li class="step">Pack Your Box</li>
                         <li class="step">Send Your Box</li>
                </ul>
                <div class="md:grid grid-cols-6">
                    <div class="col-span-1"></div>
                    <div class="col-span-4">
                <div class="text-gray-700 mt-8">
                      Hi,<span class="underline"> Username!</span> 
                </div>
                <div >
                <div class="w-full  mt-6">
                    <span class="uppercase text-sm text-gray-600 font-bold">Name of Recipient</span>
                    <div class="flex flex-row mx-auto gap-4">
                    <input class="w-full input input-bordered text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text" placeholder="First Name" />
                    <input class="w-full input input-bordered text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text" placeholder="Last Name" />
                    </div>
                    
                </div>
                
                <div class="mt-6">
                    <span class="uppercase text-sm text-gray-600 font-bold">Recipient Address</span>
                    <input class="w-full input input-bordered  text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"/>
                    <input class="w-full input input-bordered  text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"/>
                </div>
                

                <div class="mt-6">
                    <span class="uppercase text-sm text-gray-600 font-bold">Target Date</span>
                    <input class="w-full input input-bordered  text-gray-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline"
                      type="date"/>
                </div>

                 
                <div class="w-full md:w-1/2 mt-6">
                    <span class="uppercase text-sm text-gray-600 font-bold">Box Quantity</span>
                    <input class="w-full input input-bordered  text-gray-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline"
                      type="number"/>
                </div>

               
                <div class="mt-6">
                    <span class="uppercase text-sm text-gray-600 font-bold">Overall Budget</span>
                    <input type="range" id="volume" name="volume" min="300" max="5000"></input>
                    <label for="volume">NZD 300</label>
                </div>
            
             
                <div class="mt-6">
                <div class="flex flex-row mx-auto gap-4">
                    <span class="uppercase text-sm text-gray-600 font-bold">Location</span>
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
                    <span class="uppercase text-sm text-gray-600 font-bold">Box Cargo Company</span>
                    <input class="w-full input input-bordered  text-gray-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"></input>
                </div>

                <div class="mt-8 flex justify-end">
                    <button
                      class="btn btn-warning no animation focus:outline-none focus:outline-shadow">
                      Confirm
                    </button>
                
                </div>
                  </div>
                </div>
                    </div>
                    <div class="col-span-1"></div>

                
               </div>
                </div>
    

    )
}

    export default Planner