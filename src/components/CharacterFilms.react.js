import React, {Component} from 'react'

import './characterFilms.scss'


export default class haracterFilms extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filmData: {},
      useThisData: []
    }

    this.fetchAPIData = this.fetchAPIData.bind(this)
  }

  componentWillMount() { this.fetchAPIData(this.props.films) }

  fetchAPIData(films) {
    films.map(filmURL => {
      fetch(filmURL)
        .then(response => response.json())
          .then(filmData => {
            var joined = this.state.useThisData.concat(filmData);

            this.setState({useThisData: joined})
          })
    })
  }

  render() {
    console.log('this.state.useThisData: ', this.state.useThisData)

    if (this.state.useThisData) {
      return (
        <div className='character-films'>
          <h2>Appears In:</h2>
          {
            this.state.useThisData.map(film => (
              <div className='film-details' key={film.title}>
                {film.title}<br />
                {film.release_date}
              </div>
            ))
          }
        </div>
      )
    } else return null
  }
}
