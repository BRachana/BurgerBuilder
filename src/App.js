import React, { Component } from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import './App.css';
// import UserOutput from './Components/UserOutput'
// import UserInput from './Components/UserInput'
import Header from './Components/Header'
import Introduction from './Components/Introduction'
import Gallery from './Components/Gallery'
import Blog from './Components/blog'

// import headerImage from './img/headerImage.png'

class App extends Component {
	state = {
		username:"Rachana Bandapalle"
	};

	changeNameHandler = (event) => {
		this.setState({
			username: event.target.value
		});
	}

	switchNamehandler = () => {
		this.setState({
			username:"Ritesh Parmar"
		})
	};

  render() {
    return (
      <Container  className="p-3">
		  <div className="jumbo-container">
		  	<Header></Header>
			<div>
				<img className="header-img" src={require('./img/headerImage.png')} alt="Header"></img>
			</div>
			<Introduction></Introduction>
			<Gallery></Gallery>
			<div className='btn-section'>
				<button className='blog-btn'>More from the blog</button>
			</div>
			<Blog></Blog>
			{/* <div className="App">
				<button className="App-intro" onClick={this.switchNamehandler}> SwitchNames </button>
				<UserOutput username={this.state.username} ></UserOutput>
				<UserOutput username={this.state.username} ></UserOutput>
				<UserInput username={this.state.username} changed={this.changeNameHandler}></UserInput>
			</div> */}
		  </div>
      </Container>
    );
  }
}

export default App;
