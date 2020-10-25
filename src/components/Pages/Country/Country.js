import React, { Component } from 'react'
import FetchCountryRandom from '../../Fetch/FetchCountryRandom';
export default class Country extends Component {
    render() {
        return (
            <div>
               <FetchCountryRandom/>
            </div>
        )
    }
}
