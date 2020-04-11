import React from 'react'
import LondonProgrammes from '../components/LondonProgrammeCard'
import { connect } from 'react-redux'

class LondonProgrammesContainer extends React.Component {

  render(){
    return(
      <div className="lp-container">
        <LondonProgrammes/>
      </div>
    )
  }

}

mapStateToProps = state => {
  return {
    programmes: state.programmes
  }
}

export default connect()(LondonProgrammesContainer)