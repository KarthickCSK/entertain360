import React, { Component } from "react";
import "./trends.css";

export default class Trends extends Component {
  showTrends = data => {
    let trends = data.trends;
    trends.sort((a,b)=> b.tweet_volume-a.tweet_volume)
    return trends.map((tr, i) => {
      return (
        <li key={i} className="list-group-item d-flex cust-list justify-content-between align-items-center">
          <span className="trend-triple-dot"><b>{tr.name}</b></span>
          <span className="badge badge-custom badge-pill">{tr.tweet_volume||0}</span>
        </li>
      );
    });
  };

  render() {
    const { trends, isLoading } = this.props;
    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          !!trends.trends&&
          <div>
            <h5>Top tweets in {trends.locations[0].name} </h5>
            <div className="trend-scroll">
              <ul className="list-group"><i>{this.showTrends(trends)}</i></ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}
