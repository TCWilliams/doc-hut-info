import React from 'react'
import { connect } from 'react-redux'

import { setHutsToRegions } from '../actions'

class Region extends React.Component {

  
  componentDidUpdate(prevProps) {
    console.log('Regions', this.props)
  }

  render() {
    if (this.props.selectedRegion) {
      return (
        <div>
          
          Region
        </div>
      );
    }
    return <div></div>
  }
}

const mapStateToProps = (state) => {
  return {
    huts: state.huts,
    selectedRegion: state.selectedRegion,
    regions: state.regions,
  }
}
export default connect(
  mapStateToProps,
  {
    setHutsToRegions,
  }
)(Region)