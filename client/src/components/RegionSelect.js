import React from 'react'
import { connect } from 'react-redux'
import Select from 'react-select';

import Spinner from './Spinner'

import { selectRegion } from '../actions'

class RegionSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
      selectedValue: null,
    }
  }

  handleSelectedRegionChange = ( option ) => {
    this.props.selectRegion(option.value)
    this.setState({selectedValue: option})
  }

  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate', this.state.selectedValue)
    if (!prevProps.regions && this.props.regions) {
      const options = []
      for (const item of this.props.regions.sort()) {
        item !== 'null' && options.push({
          value: item,
          label: item.toUpperCase()
        })
      }
      console.log('made options', options)  
      this.setState({ selectOptions: options })
    }
  }

  render() {
    if (this.state.selectOptions.length) {
      return (
        <div>
          <Select
            placeholder="Select region"
            value={this.state.selectedValue}
            onChange={this.handleSelectedRegionChange}
            options={this.state.selectOptions} 
          />
        </div>
      );
    }
    return <Spinner text={'Retrieving hut data'} />
  }
}

const mapStateToProps = (state) => {
  return {
    huts: state.huts,
    regions: state.regions,
    selectedRegion: state.selectedRegion,
    hutsToRegions: state.hutsToRegions,
  }
}
export default connect(
  mapStateToProps,
  {
    selectRegion,
  }
)(RegionSelect)