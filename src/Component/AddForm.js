import React from 'react'

export default function AddForm() {
  return (
    <div>
      <form action="">
      <div>
          
          <input
            type="text"
            placeholder="Enter title"
          />
        </div><br />

        <div>
         
          <input
            type="text"
            placeholder="Enter details"
          />
        </div><br />


        <button type="submit" className='btn btn-outline-light'>Add New</button>

      </form>
    </div>
  )
}
