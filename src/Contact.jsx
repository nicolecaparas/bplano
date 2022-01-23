import React from 'react'

function Contact () {  
    return (
        <div class="bg-white text-gray-100 px-8 py-12">
              <div
                class="max-w-screen-xl mt-5 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-10 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                <div class="flex flex-col justify-between">
                  <div>
                    <h2 class="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
                    <div class="text-gray-700 mt-8">
                      Hate forms? Send us an <span class="underline">email</span> instead.
                    </div>
                  </div>
                  <div class="mt-2">
                 <img src="./images/Contact.png" className="justify-start"/>
                  </div>
                </div>
                <div>
                  <div>
                    <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                    <input class="w-full input input-bordered text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text" placeholder="" />
                  </div>
                  <div class="mt-8">
                    <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
                    <input class="w-full input input-bordered  text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"/>
                  </div>
                  <div class="mt-8">
                    <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
                    <textarea
                      class="w-full h-32 input input-bordered  text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                  </div>
                  <div class="mt-8 flex justify-end">
                    <button
                      class="btn btn-warning no animation focus:outline-none focus:outline-shadow">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
        </div>

    )
}

    export default Contact