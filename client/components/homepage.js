import React from 'react'
import {fetchAllDogs} from '../store/dogs'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  createMuiTheme,
  Button
} from '@material-ui/core'
import PetsIcon from '@material-ui/icons/Pets'

class Homepage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      zipCode: ''
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  submitHandler = e => {
    e.preventDefault()
    const {zipCode} = this.state
    this.props.loadAllDogs(zipCode)
  }

  handleChange = e => {
    this.setState({zipCode: e.target.value})
  }

  render() {
    const dogs = this.props.dogs

    let alldogs
    // if (dogs.length === 0) {
    //   alldogs = <div>Loading...</div>
    // }

    if (dogs.length > 0) {
      alldogs = dogs[0].map(dog => (
        <div rownumber="allDogsView" key={dog.rownumber}>
          <Link to={`/dogs/${dog.rownumber}`}>{dog.animalname}</Link>
        </div>
      ))
    }

    return (
      <div>
        {/* <CardActions style={{justifyContent: 'center'}}> */}
        {/* <Link to="/">Names</Link>&emsp;
        <Link to="/breed">Breed</Link> */}
        <p>
          <Typography align="center" variant="h6" component="h3">
            <strong>
              There is around half a million dogs in NYC! Below is the wordcloud
              visualization of all dog breeds sized by popularity.
            </strong>
          </Typography>
        </p>
        <br />

        <Typography
          align="center"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Write your zip code and press the paw to see all dogs that live
          nearby!
        </Typography>

        <CardActions style={{justifyContent: 'center'}}>
          <form onSubmit={this.submitHandler}>
            <input placeholder="zip code" onChange={this.handleChange} />
            <Button type="submit" onSubmit={this.submitHandler}>
              <PetsIcon />
            </Button>
            <br />
            <Typography variant="h5" component="h2" color="Primary">
              {alldogs}
            </Typography>
          </form>
        </CardActions>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    dogs: state.dogs
  }
}

const mapDispatch = dispatch => {
  return {
    loadAllDogs: zipCode => dispatch(fetchAllDogs(zipCode))
  }
}

const AllDogsConnected = connect(mapState, mapDispatch)(Homepage)
export default AllDogsConnected
