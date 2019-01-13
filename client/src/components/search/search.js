import React, { Component } from 'react'
import axios from 'axios';
import './search.css';
import './search';
import IndiHorizontalCard from '../common/indiHorizontalCard';
const { REACT_APP_SERVER, REACT_APP_MOVIE_SEARCH } = process.env;

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingSearch:false,
      searchMovie: [],
      typedText: "",
      currentPage: 1,
      totalPage: 1,
      type: "movie",
      adult: false
    }
  }

  componentWillMount() {
    this.searchMovie();
  }

  searchMovie = () => {
    const { typedText, currentPage, adult } = this.state;
    this.setState({loadingSearch:true})
    axios({
      method: 'get',
      url:`${REACT_APP_SERVER+REACT_APP_MOVIE_SEARCH}?keyword=${typedText||"avenger"}&page=${currentPage}&adult=${false}`,
    })
    .then((response) => {
      // console.log(response)
      this.setState({loadingSearch:false, searchMovie:response.data.data.results, totalPage:response.data.data.total_pages})
    }).catch(err=>{
      console.log(err)
      this.setState({loadingSearch:false})
    });
  }

  componentDidMount() {
    var header = document.getElementById("search-box");
    var sticky = header.offsetTop+100;
    window.onscroll = function() {
        if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };
  }
  
  onChange = (e) => {
    this.setState({typedText:e.target.value})
  }
  render() {
    const { searchMovie, adult, loadingSearch } = this.state;
    return (
      [
        <div className="form-row justify-content-center search-box" id="search-box">
          <div className="col-6 col-md-4 col-sm-12 input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <input style={{margin:'0px'}}type="checkbox" id="adult" value={adult} onChange={(e)=>this.setState({adult:!this.state.adult})}/>
              </div>
            </div>
            <input type="text" className="form-control cust-input" placeholder="Search by keyword.." aria-label="Search by keyword.." aria-describedby="search-btn" onChange={this.onChange}/>
            <div className="input-group-append">
              <button className="btn cust-btn btn-secondary" type="button" id="search-btn" onClick={this.searchMovie}>Search</button>
            </div>
          </div>
          <select className="col-2 col-md-2 col-sm-12 form-control form-control-lg cust-dropdown">
            <option>Movie</option>
            <option>Tv Shows</option>
          </select> 
        </div>,
        <div key={2} className="row">
          {loadingSearch?null:searchMovie.map((movie, index) => {
            return (
              <div className="col-3" key={index}>
                <IndiHorizontalCard {...movie}/>
              </div>
            )
          })}
        </div>
      ]
    )
  }
}
