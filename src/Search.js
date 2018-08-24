import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';


class Search extends Component {
  state = {
    markers: [],
    filtered: [],
    query: ''
  }

  filterLocations = (query) => {
    let filtered = this.props.markers

    if (query.length > 0) {
      const match = new RegExp(escapeRegExp(query), 'i');
      filtered = this.props.markers.filter((marker) => match.test(marker.name))
      } else {
            filtered = this.props.markers
        }


        this.props.updateQuery(filtered)
  }
    render() {

      return (
        <div id='sidebar'>
        <div className='search'>
          <input
            type="text"
            placeholder="Filter"
            value={ this.filtered }
            onChange={(e) => this.filterLocations(e.target.value)}/>
                      </div>
                      <div className = 'list'>
                        <ul className = 'places'>{
                          this.props.filtered.map((marker) =>
                          (<li key={marker.id}
                            onClick={() => {this.props.openInfoWindow(marker.id)}}>
                            {marker.name}
                            </li>
                          ))
                        }
                        </ul>
                      </div>
                    </div>
                  )}
                }

Search.propTypes = {
  markers: PropTypes.array.isRequired,
  filtered: PropTypes.array.isRequired,
  updateQuery: PropTypes.func.isRequired
}

export default Search;
