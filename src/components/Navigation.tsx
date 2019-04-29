import * as React from 'react'
import { Link } from '@reach/router'
import { ReactComponent as Logo } from '../assets/logo.svg'

const Navigation: React.FunctionComponent = () => {
  return (
    <div>
      <nav>
        <Logo />
        <Link to="/">Movies</Link>
        <Link to="dashboard">Series</Link>
      </nav>
    </div>
  )
}

export default Navigation
