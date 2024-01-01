import React from 'react'
import {Link} from 'react-router-dom'


const Main=()=>{

    return(
        <div>
             <div className='container'>
      <h1>Welcome to ProductZone</h1>

      </div>
      <div className=''>Welcome Admin !!</div>
      <div>
        <Link to="add" className='button btn btn-danger m-2'>Add New Product</Link>
      </div>
      <div>
        <Link to='delete' className='button btn btn-primary m-2'>Delete Product</Link>
      </div>
      <div>
        <Link to="fetch" className='button btn btn-success m-2'>Fetch Product</Link>
      </div>
        </div>
    )
}

export default Main;