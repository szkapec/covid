import React, { Component } from 'react'
// import { groupBy } from 'lodash';
import { StyledWrapper, StyledTitle, StyledWrapperTitle, LiStyl, UlStyl, DescriptionStyl} from './StyleFetch';
import styled from 'styled-components';

////////////Ogólnie zakarzenia w POLSCE 

export default class FetchCountryPolandProvince extends Component {

        state = {
            lubelskieInfected: '',
            LubelskieDead: '',
            all: [],
        }
        
        componentDidMount(){
            this.performProvince();
        }

        performProvince = () => {

            const api = 'https://api.apify.com/v2/key-value-stores/3Po6TV7wTht4vIEid/records/LATEST?disableRedirect=true'
            
            try {
                fetch(api)
                .then(api=> {
                    if(api.ok){
                        return api
                    }
                    
                })
                .then(api => api.json())
                .then(api => {
                    this.setState({
                        lubelskieInfected: api.infectedByRegion[2].infectedCount,
                        LubelskieDead: api.infectedByRegion[2].deceasedCount,
                        all: api.infectedByRegion,
                    })
                })
            } catch (error) {
                console.log(error)
                }
            }



    render() {

        const wypisz = () => (
            <div>
                
               {this.state.all.map((item,index)=> {

                   return <StyledUl key={item.region}>
                        <StyledLi><b>Województwo: {item.region}</b></StyledLi>
                        <StyledLi>Zainfekowanych: {item.infectedCount} osób.</StyledLi>
                        <StyledLi>Zmarłych: {item.deceasedCount} osób.</StyledLi>

                   </StyledUl>
               })}
            </div>
        )
        
        return (
            <StyledWrapper >
                <StyledWrapperTitle><StyledTitle>Informacje szczegółowe w województwach</StyledTitle></StyledWrapperTitle>
                {wypisz()}
                
            </StyledWrapper>
        )
    }
}
const StyledLi = styled.li`
    margin: 10px 0;
    color:white;
    text-align: center;
    font-family: 'Baloo 2', cursive;
`
const StyledUl = styled.ul`
    background-color: #27293d;
    text-decoration: none;
    list-style: none;
    width: 80%;
    max-width: 600px;
    padding: 15px 0;
    margin: 40px auto;
    border-radius: 10px;
    /* box-shadow: 0px 0px 15px 8px rgba(245,245,2451); */
    font-family: 'Baloo 2', cursive;
    font-size: 15px;
    @media(min-width: 400px) {
        font-size: 16px;
    }
    @media(min-width: 600px) {
        font-size: 18px;
    }
`

