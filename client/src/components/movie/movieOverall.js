import React, { Component } from 'react'
import axios from 'axios';
import showOverallCard from '../common/overallCard';
import './movie.css'

const { REACT_APP_SERVER, REACT_APP_MOVIE_POPULAR, REACT_APP_MOVIE_UPCOMING } = process.env;

export default class Movie extends Component {

  constructor(props) {
    super(props)
    this.state= {
      popularLoading:false,
      allPopular:[],
      upcomingLoading: false,
      allUpcoming:[]
    }
  }

  componentWillMount = () => {
    this.getPopularMovies();
    this.getUpcomingMovies()
  }
  

  getPopularMovies = () => {
    this.setState({popularLoading:true})
    axios({
      method: 'get',
      url:REACT_APP_SERVER+REACT_APP_MOVIE_POPULAR,
    })
    .then((response) => {
      // console.log(response)
      if(response.data.status) {
        this.setState({allPopular: response.data.data})
      }
      this.setState({popularLoading:false})
    }).catch(err=>{
      console.log(err)
      this.setState({popularLoading:false})
    });
  }

  getUpcomingMovies = () => {
    this.setState({upcomingLoading:true})
    axios({
      method: 'get',
      url:REACT_APP_SERVER+REACT_APP_MOVIE_UPCOMING,
    })
    .then((response) => {
      // console.log(response, REACT_APP_SERVER+REACT_APP_MOVIE_UPCOMING)
      if(response.data.status) {
        this.setState({allUpcoming: response.data.data})
      }
      this.setState({upcomingLoading:false})
    }).catch(err=>{
      console.log(err)
      this.setState({upcomingLoading:false})
    });
  }

  render() {
    const { popularLoading, allPopular, upcomingLoading, allUpcoming } = this.state;
    return (
      [
      <div className="col-3" key={1}>
      {!popularLoading&&showOverallCard(allPopular.results, 'Popular movies')}
      </div>,
      <div className="col-3" key={2}>
      {!upcomingLoading&&showOverallCard(allUpcoming.results, 'Upcoming movies')}
      </div>
      ]
    )
  }
}
