// import React from 'react'
// import {fetchAllDogs} from '../store/dogs'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'

// class Breed extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       zipCode: ''
//     }

//     this.submitHandler = this.submitHandler.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//   }

//   submitHandler = e => {
//     e.preventDefault()
//     const {zipCode} = this.state
//     this.props.loadAllDogs(zipCode)
//   }

//   handleChange = e => {
//     this.setState({zipCode: e.target.value})
//   }

//   render() {
//     const dogs = this.props.dogs

//     let alldogs
//     if (dogs.length > 0) {
//       alldogs = dogs[0].map(dog => (
//         <div rownumber="allDogsView" key={dog.rownumber}>
//           {dog.breedname}
//         </div>
//       ))
//     }

//     return (
//       <div>
//         <Link to="/">Names</Link>&emsp;
//         <Link to="/breed">Breed</Link>
//         <form onSubmit={this.submitHandler}>
//           <input placeholder="zip code" onChange={this.handleChange} />
//           <button type="submit" onSubmit={this.submitHandler}>
//             Submit
//           </button>
//           <br />
//           {alldogs}
//         </form>
//       </div>
//     )
//   }
// }

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     dogs: state.dogs
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadAllDogs: zipCode => dispatch(fetchAllDogs(zipCode))
//   }
// }

// const AllDogsConnected = connect(mapState, mapDispatch)(Breed)
// export default AllDogsConnected
