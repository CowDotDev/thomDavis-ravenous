import React from 'react';
import './App.css';
import BusinessList from '../src/components/BusinessList/BusinessList';
import SearchBar from '../src/components/SearchBar/SearchBar';

const business = {
  imageSrc: './images/pizza.jpg',
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
     business
  ];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'businesses' : []
    }

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp( term, location, sortBy) {
    console.log('Searching Yelp with Pizza, Brooklyn, best_match');
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar/>
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}