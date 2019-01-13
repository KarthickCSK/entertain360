import React, { Component } from 'react'
import axios from 'axios';
import showOverallCard from '../common/overallCard';

import './tv.css'

const { REACT_APP_SERVER, REACT_APP_TV_TOP, REACT_APP_TV_POPULAR } = process.env;
export default class Tv extends Component {
  constructor (props) {
    super(props); 
    this.state = {
      popularLoading:false,
      allPopular:[],
      topLoading: false,
      allTop:[]
    }
  }

  componentWillMount = () => {
    this.getPopularTv();
    this.getTopTv()
  }
  

  getPopularTv = () => {
    this.setState({popularLoading:true})
    axios({
      method: 'get',
      url:REACT_APP_SERVER+REACT_APP_TV_POPULAR,
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

  getTopTv = () => {
    this.setState({topLoading:true})
    axios({
      method: 'get',
      url:REACT_APP_SERVER+REACT_APP_TV_TOP,
    })
    .then((response) => {
      // console.log(response, REACT_APP_SERVER+REACT_APP_TV_TOP)
      if(response.data.status) {
        this.setState({allTop: response.data.data})
      }
      this.setState({topLoading:false})
    }).catch(err=>{
      console.log(err)
      this.setState({topLoading:false})
    });
  }

  render() {
    const { popularLoading, allPopular, topLoading, allTop } = this.state;
    return (
      [
      <div className="col-3" key={1}>
      {!popularLoading&&showOverallCard(allPopular.results, 'Popular Tv Shows')}
      </div>,
      <div className="col-3" key={2}>
      {!topLoading&&showOverallCard(allTop.results, 'Top TV Shows')}
      </div>
      ]
    )
  }
}
