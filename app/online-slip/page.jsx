import React from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer" 
function page() {
  return (
< >
<Header/>
<div className=' bg-white'>
    <div className='text-center'>
        <h1 className='text-4xl text-gray-800 font-sans font-bold'>Welcome To Student Portal</h1>
        <p className='text-lg text-gray-800 font-sans font-semibold mt-5'>Please select the exam type & enter the roll number to download your duplicate slip</p>
    </div>
    <div class="flex flex-col items-center">
  <p class="text-center text-gray-700 mb-4">Please select the exam type & enter the roll number to download your duplicate slip</p>
  
  <form class="flex flex-row gap-3 items-center">
    
    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 w-44">
      <option selected disabled>Select</option>
      <option value="SSC(I)">SSC(I)</option>
      <option value="SSC(II)">SSC(II)</option>
      <option value="HSC(I)">HSC(I)</option>
      <option value="HSC(II)">HSC(II)</option>
    </select>
    
    <input type="number" placeholder="Roll Number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 w-56" />
  </form>
  
  <button class="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none">
    DOWNLOAD
  </button>
</div>

</div>
<Footer/>

</>
  )
}

export default page