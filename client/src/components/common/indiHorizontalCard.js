import React from 'react'
import moment from 'moment';

export default function IndiHorizontalCard(props) {
  let { movie } = props;
  let url = movie.poster_path?`https://image.tmdb.org/t/p/w300/${movie.poster_path}`:require('../common/default.png');
  let favUrl = props.fav.filter(fav=>fav.id===movie.id).length?require('./heart.png'):require('./heart-outline.png');
  let watchUrl = props.wantToWatch.filter(wantToWatch=>wantToWatch.id===movie.id).length?require('./watch.png'):require('./watch-outline.png');
  return (
    <div className="card indi-hor-card">
      <img src={url} className="card-img" alt="..." />
      <div className="card-img">
        <h4 className="card-title">{movie.title|| movie.name}</h4>
        <h6 className="card-text">{moment(movie.release_date).format('Do MMM YYYY')}</h6>
        <p className="card-text">{movie.overview}</p>
      </div>
      <div className="card-footer">
        <span className="card-link" onClick={()=>props.toggleFav(movie)}>Favorite &nbsp;<img width="16" height="16" src={favUrl} alt="..." /></span>
        <span className="card-link" onClick={()=>props.toggleWantToWatch(movie)}>Want to watch &nbsp;<img width="16" height="16" src={watchUrl} alt="..." /></span>
      </div>
    </div>
  )
}

