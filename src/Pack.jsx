import React from 'react'
import { Link } from 'react-router-dom'
import FamilyMemberRow from './Pack/FamilyMemberRow';

function Pack () {  
    return (
        <div class="bg-white text-gray-100 px-8 py-12 md:mb-60">
              <div
                class="max-w-screen-xl mt-5 px-8 grid gap-8 md:px-12 lg:px-16 xl:px-32 py-10 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                <ul class="steps steps-vertical lg:steps-horizontal">
                         <li class="step step-warning">Register</li>
                         <li class="step step-warning">Plan Your Box</li>
                         <li class="step step-warning">Pack Your Box</li>
                         <li class="step">Send Your Box</li>
                </ul>
                <div class="md:grid grid-cols-6">
                    <div class="col-span-1"></div>
                    <div class="col-span-4">
                <div class="text-gray-700 mt-8">
                      Hi,<span class="underline"> Username!</span> 
                </div>
                <div>
                 
                <div class="w-full md:w-1/2 mt-6">
                    <span class="uppercase text-sm text-gray-600 font-bold">Box Size</span>
                    <select  placeholder="All New Zealand" class="w-full input input-bordered  text-gray-900 mt-2 rounded-lg focus:outline-none focus:shadow-outline">
                        <option>Regular box 23"x20"x17"</option>
                        <option>Jumbo box 23"x20"x23"</option>
                    </select>
                </div>

                  
                <div class="w-full md:w-1/2 mt-6">
                    <span class="uppercase text-sm text-gray-600 font-bold">Actual Cost:</span>
                </div>

                <div class="w-full md:w-1/2 mt-6">
                    <span class="uppercase text-sm text-gray-600 font-bold">Overall Gift Budget:</span>
                </div>

                <div class="w-full mt-6 mb-8">
                <span class="uppercase text-sm text-gray-600 font-bold">Box 1 Content:</span>
  <table class="table table-compact w-full">
      {/* head */}
    <thead className='text-center'>
      <tr>
        <th>Action</th>
        <th>Family Member</th>
        <th>Gift Item</th>
        <th>Gift Cost</th>
        <th>Gift Qty</th>
        <th>Packed?</th>
        <th class="px-20">Notes</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        <FamilyMemberRow giftName="Banana" />
        <FamilyMemberRow  giftName="Apple" />
        <FamilyMemberRow  giftName="Orange" />
      {/* row 2 */}
    </tbody>
    
  </table>
</div>

            

                <div class="mt-8 flex justify-end gap-2">
                <Link to='/planner'>
                    <button
                      class="btn btn-warning no animation focus:outline-none focus:outline-shadow">
                      Back
                    </button>
                </Link>

                <Link to='/sendbox'>
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
                </div>
    

    )
}

    export default Pack