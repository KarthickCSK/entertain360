import React from 'react'
import moment from 'moment';

export default function showOverallCard(data, title) {
  if(data&&data.length){
    let popular = [...data.sort((a,b)=>b.popularity-a.popularity)].splice(0,10)
    return(
      <div className="cust-table-container card">
        <h5 style={{ 'textAlign': 'center'}}>{title}</h5>
        <table  className="table table-responsive table-borderless cust-table-cine">
          <tbody>
            {popular.map((movie, index) => {
              return(
                <tr key={index}>
                  <td>{movie.title || movie.name}</td>
                  <td>{moment(movie.release_date||movie.first_air_date).format('Do MMM YY')}</td>
                  <td>{movie.vote_average}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }else{
    return(
      <div className="cust-table-container card">
        <h5 style={{ 'textAlign': 'center'}}>{title}</h5>
        <table  className="table table-responsive table-borderless cust-table-cine">
          <tbody>
          </tbody>
        </table>
      </div>
    )
  }
}
