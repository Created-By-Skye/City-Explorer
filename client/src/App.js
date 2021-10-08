import React from 'react';
import axios from 'axios'
import './index.css'
import Search from './components/Search'
import Location from './components/Location'
import Header from './components/Header'
import Error from './components/Error'

// import Error from './components/Error'
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      searchCompleted: false,
      cityInput: '',
      cityData: {},
      cityName: '',
      latitude: '',
      longitude: '',
    }
  }
  showSearch = () => {
    this.setState({ searchCompleted: false });
  }

    handleSearch = async (cityInput) => {
      try {
        let res = await axios.get(`http://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_API_KEY}&q=city:${[cityInput]}&format=json`);
        // console.log(res.data[0])
        console.log('display name', res.data[0].display_name);
        console.log('latitude', res.data[0].lat);
        console.log('longitude', res.data[0].lon);
        this.setState({
          searchCompleted: true,
          cityInput: cityInput,
          cityData: res.data[0],
          cityName: res.data[0].display_name,
          latitude: res.data[0].lat,
          longitude: res.data[0].lon,
        });
      } catch (err) {
        // console.log(err);
        this.setState({
        errors: `${err}`,
        searchCompleted: false,
        });
      }



      // get weather api handler
      // weatherData = res.data.data[0]
      
      // `https://api.weatherbit.io/v2.0/current?key=${REACT_APP_WEATHER_API_KEY}&units=I&lat=${res.data[0].lat}&lon={res.data[0].lon}`
    }    
      

    render() {
      
      // console.log(this.state);
      return (
        <div id="wrapper">
        <div id="page-wrap">
          <Header />  
          {
            this.state.searchCompleted && this.state.errors.length === 0 ?
          <Location handleShowSearch={this.showSearch} cityData={this.state.cityData} /> :
          this.state.errors.length !== 0 ?
          <Error handleSearch={this.handleSearch} errors={this.state.errors} error={this.state.error} />  :

    
          <Search handleSearch={this.handleSearch} cityData={this.state.cityData}/> 
      
          }
         
           
          </div>
       </div>
      )
           }
           
          }
  

    export default App