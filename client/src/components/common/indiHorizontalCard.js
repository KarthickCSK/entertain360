import React from 'react'
import moment from 'moment';

export default function IndiHorizontalCard(data) {
  let url = data.poster_path?`https://image.tmdb.org/t/p/w300/${data.poster_path}`:require('../common/default.png');
  return (
    <div className="card indi-hor-card">
      <img src={url} className="card-img" alt="..." />
      <div className="card-img">
        <h4 className="card-title">{data.title|| data.name}</h4>
        <h6 className="card-text">{moment(data.release_date).format('Do MMM YYYY')}</h6>
        <p className="card-text">{data.overview}</p>
      </div>
    </div>
  )
}

