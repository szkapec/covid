import React, {Component} from 'react'
import FetchCountryAll from '../../Fetch/FetchCountryAll';
import {StyledWrapperTitle,StyledTitle} from '../../Fetch/StyleFetch';
import FetchStatisticPoland from '../../Fetch/FetchStatisticPoland';
export default class MainPages extends Component {
    

    render() {

      

       



        return (
            <div>
                <StyledWrapperTitle> <StyledTitle>Wszystkie przypadki wirusa Covid-19. Statystyki z całego świata.</StyledTitle></StyledWrapperTitle>
                
                <FetchCountryAll globalCasesProps StyledProps/>
                <FetchStatisticPoland/>
            </div>
        )
    }
}
