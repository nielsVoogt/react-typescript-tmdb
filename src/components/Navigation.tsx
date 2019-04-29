import * as React from 'react'
import { Link } from '@reach/router'

const Navigation: React.FunctionComponent = () => {
  return (
    <div>
      <nav>
        <Link to="/">Movies</Link>
        <Link to="dashboard">Series</Link>
      </nav>
    </div>
  )
}

export default Navigation
