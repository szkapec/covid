import React from 'react'
import FetchCountryPoland from '../../Fetch/FetchCountryPoland';
import FetchCountryPolandProvince from '../../Fetch/FetchCountryPolandProvince';

export default function ToDayInfection() {
 
    return (
        <>
            <FetchCountryPoland poland/>
            <FetchCountryPolandProvince/>
            
        </>
    )
}


//  {/* <div>
//                         MOzna poleciec po wszystkich danych i sprawdzić gdzie najwieksza jest totalConfirmed i wyswietlić 5bnajwiekszych
//                     </div>
//                     <div>
//                         W ktorym dniu bylo najwiecej w Polsce
//                     </div>
//                     <div>Ile juz dni w polsce jest corona</div>
//                     <div>Wysukiwanie po dacie i sprawdzenie ile bylo przypadkow i ile zgonów w Polsce </div> */}