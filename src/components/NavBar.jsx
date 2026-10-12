import React from 'react'
import {Link} from 'react-router'
function Navbar() {
  return (
    <div>

        <Link to='/'>   HomePage   </Link>
        
        <Link to='/products'>   Products   </Link>

        <Link to='/new-product'>   New Products   </Link>

    </div>
  )
}

export default Navbar