import React, { Component } from 'react'
import axios from 'axios';
import IndiHorizontalCard from '../common/indiHorizontalCard';
import './movie.css'

const { REACT_APP_SERVER, REACT_APP_TV_LATEST } = process.env;

export default class MovieLatest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestMovieLoading: false,
      latestMovie: {}
    }
  }
  
  componentWillMount() {
    this.getLatestMovie();
  }

  getLatestMovie = () => {
    this.setState({latestMovieLoading:true})
    axios({
      method: 'get',
      url:REACT_APP_SERVER+REACT_APP_TV_LATEST,
    })
    .then((response) => {
      console.log(response)
      if(response.data.status) {
        this.setState({latestMovie: response.data.data})
      }
      this.setState({latestMovieLoading:false})
    }).catch(err=>{
      console.log(err)
      this.setState({latestMovieLoading:false})
    });
  }

  render() {
    const { latestMovieLoading, latestMovie } = this.state;
    return (
      <div className="col-3" key={2}>
      {!latestMovieLoading&&IndiHorizontalCard(latestMovie, 'Latest movie')}
      </div>
    )
  }
}
