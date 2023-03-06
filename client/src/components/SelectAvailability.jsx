import React from 'react'




const SelectAvailability = () => {
 return (
  <div>
   <h2>My Availability</h2>
   <label htmlFor="date">Date</label> 
   
   <select className='select-date'>
    <option value=""></option>
   </select>

   <label htmlFor="from">From</label>

   <select className='time-from'>
    <option value=""></option>
   </select>

   <label htmlFor="to">To</label>

   <select className='time-to'>
    <option value=""></option>
   </select>
   

   <button className='btn' type="submit">Submit</button>



  </div>
 )
}















export default SelectAvailability