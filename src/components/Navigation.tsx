
import * as React from 'react';
import { Link } from "@reach/router"

const Navigation: React.FunctionComponent = () => {
    return (
    <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="dashboard">Dashboard</Link>
        </nav>
      </div>
    )
};

export default Navigation