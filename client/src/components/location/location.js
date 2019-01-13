import React, { Component } from 'react'
import Trends from '../trends/trends';
import Weather from '../weather/weather';
import axios from 'axios';
import './location.css';
const { REACT_APP_SERVER, REACT_APP_LOCATIONS, REACT_APP_GET_WEATHER_URL, REACT_APP_API_KEY, REACT_APP_TWITTER_TRENDS } = process.env;
export default class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      trends: {},
      selectedLocation: 'London',
      selectedWoeid: 44418,
      allLocation: [],
      loadingAllLoc: false,
      loadingWeather: false,
      loadingTrends: false
    }
  }
  
  componentWillMount() {
    this.getLocations();
    this.getWeather();
  }
  
  getLocations = () => {
    this.setState({loadingAllLoc:true})
    axios({
      method: 'get',
      url:REACT_APP_SERVER+REACT_APP_LOCATIONS,
    })
    .then((response) => {
      // console.log(response)
      if(response.data.status) {
        this.setState({allLocation: response.data.data})
        this.getTrends();
      }
      this.setState({loadingAllLoc:false})
    }).catch(err=>{
      console.log(err)
      this.setState({loadingAllLoc:false})
    });
  }
  
  getTrends = () => {
    const { selectedLocation, allLocation } = this.state;
    let loc = allLocation.filter(l=>l.name === selectedLocation)
    if(loc.length){
      this.setState({loadingTrends:true, selectedWoeid: loc[0].woeid})
      axios({
        method: 'get',
        url:REACT_APP_SERVER+REACT_APP_TWITTER_TRENDS+'/'+loc[0].woeid,
      })
      .then((response) => {
        // console.log(response.data.data)
        this.setState({loadingTrends:false, trends:response.data.data})
      }).catch(err=>{
        console.log(err)
        this.setState({loadingTrends:false})
      });
    }
  }

  getWeather = () => {
    const { selectedLocation } = this.state;
    this.setState({loadingWeather:true})
    axios({
      method: 'get',
      url:`${REACT_APP_GET_WEATHER_URL}?q=${selectedLocation}&APPID=${REACT_APP_API_KEY}`,
    })
    .then((response) => {
      // console.log(response)
      this.setState({loadingWeather:false, weather:response.data})
    }).catch(err=>{
      console.log(err)
      this.setState({loadingWeather:false})
    });
  }

  onChange = (e) => {
    this.setState({selectedLocation:e.target.value})
  }
  render() {
    const { allLocation, weather, trends, loadingWeather, loadingTrends } = this.state;
    return (
      <div className="location-container">
        <div className="input-group mb-3">
          <input list="locations" className="form-control cust-input input-h28" onInput={this.onChange} placeholder="Select location" aria-label="Select location" aria-describedby="basic-addon2" />
          <datalist id="locations">
            {allLocation.map((loc, i) => <option key={i} value={loc.name} />)}
          </datalist>
          <div className="input-group-append">
            <button className="btn btn-dark cust-btn btn-h28" type="button" 
            onClick={()=>{
              this.getWeather();
              this.getTrends();
            }}>Search</button>
          </div>
        </div>
        <Weather isLoading={loadingWeather} weather={weather}/>
        <Trends isLoading={loadingTrends} trends={trends}/>
      </div>
    )
  }
}
