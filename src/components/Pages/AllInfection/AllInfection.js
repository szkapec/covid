import React from 'react'
import FetchCountryAll from '../../Fetch/FetchCountryAll';

export default function AllInfection() {
    return (

        <div>
            <FetchCountryAll globalCasesProps newCasesProps TeenCountriesProps />
        </div>
    )
}
