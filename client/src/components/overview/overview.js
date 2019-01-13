import React, { Component } from 'react'
import Movie from '../movie/movieOverall';
import Tv from '../tv/tvOverall';
import Search from '../search/search';
export default class Overview extends Component {
  render() {
    return (
      [
      <div className="row" key={1}>
        <Movie />
        <Tv />
      </div>,
      <Search key={2}/>
      ]
    )
  }
}
