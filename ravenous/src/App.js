import React from 'react';
import logo from './logo.svg';
import './App.css';

import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

const business = {
 imageSrc: 'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_6941_6018.JPEG',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [ 
  business,
  business,
  business,
  business,
  business,
  business,
  //Make sure to have six in total
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
	businesses: []
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
	this.setState({businesses: businesses});
    });
  }

  render() {
    return (
      <div className="App">
  	  <h1>ravenous</h1>
  	  <SearchBar searchYelp={this.searchYelp} />
  	  <BusinessList businesses={this.state.businesses} /> 
      </div>
    );
  }
}

export default App;
