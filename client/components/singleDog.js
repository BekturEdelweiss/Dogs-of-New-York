import React from 'react'
import {fetchDog} from '../store/dogs'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Typography} from '@material-ui/core'

class Dog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rowNumber: ''
    }
  }
  componentDidMount() {
    this.props.loadSingleDog(this.props.match.params.rowNumber)
  }

  render() {
    const dog = this.props.dog
    return (
      <div>
        <Typography variant="h2" component="h2" align="left" color="Primary">
          {dog[0].map(dog => (
            <div rownumber="allDogsView" key={dog.rownumber}>
              Name: {dog.animalname}
              <br />
              Breed: {dog.breedname}
              <br />
              Year of birth: {dog.animalbirth}
              <br />
              Gender: {dog.animalgender}
            </div>
          ))}
        </Typography>
      </div>
    )
  }
}

const mapState = state => {
  return {
    dog: state.dog
  }
}

const mapDispatch = dispatch => {
  return {
    loadSingleDog: rowNumber => dispatch(fetchDog(rowNumber))
  }
}

const SingleDogConnected = connect(mapState, mapDispatch)(Dog)
export default SingleDogConnected
