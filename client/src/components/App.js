import React from 'react'

import Huts from './Huts'
import RegionSelect from './RegionSelect'
import SelectedHut from './SelectedHut'


class App extends React.Component {

  render() {
    return (
      <div className="container">  
        <div className="row">
          <span className="col-sm">
            <RegionSelect />
            <br />
            <span className="text-white">
              <Huts />
            </span>
          </span>
          <span className="col-sm-8">
            <SelectedHut />
          </span>
        </div> 
      </div>
    )
  }
}

export default App