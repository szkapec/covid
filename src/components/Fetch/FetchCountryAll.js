import React, {Component} from 'react'
import {StyledWrapper, StyledUl, StyledTitle, StyledWrapperTitle, LiStyl, UlStyl, DescriptionStyl} from './StyleFetch';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import LoadingIndicatior from '../Loading/LoadingIndicator';

export default class FetchCountryAll extends Component {

    state = { allCases: '', newCases: '', newDead: '', criticalState: '', allTotalCases: '', allTotalDead: '', allTotalRecovered: '', countryTab: [], day: '',}

    componentDidMount() {
        this.follow();
    }

    follow = () => {
        fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
            "x-rapidapi-key": "40ddf12a2emsh06a2fa2ebef5ecbp10fb02jsn4827ba559849"
            }
        })
    .then(api=> {
        if(api.ok){
            return api
        }
    })
    .then(api => api.json())
    .then(api => {
        let countryTab = [];
        for(var i = 0; i<10; i++) {
            countryTab[i] = api.countries_stat[i]
        }
        this.setState({
            allCases: api.world_total.active_cases,
            newCases: api.world_total.new_cases,
            newDead: api.world_total.new_deaths,
            criticalState: api.world_total.serious_critical,
            allTotalCases: api.world_total.total_cases,
            allTotalDead: api.world_total.total_deaths,
            allTotalRecovered: api.world_total.total_recovered,
            countryTab: countryTab,
            day: api.statistic_taken_at,
        })
    })
    .catch(err => {
        console.log(err);
    });
}

    foolowScanBig = () => (
        this.state.countryTab.map(item=> {
                return (
                        <StyledWrapperBig value={parseInt(item.cases)} key={item.country_name}>
                            <th>{item.country_name}</th>
                            <th>{item.active_cases}</th>
                            <th>{item.new_cases}</th>
                            <th>{item.new_deaths}</th>
                            
                            
                            <th>{item.cases}</th>
                            <th>{item.deaths}</th>
                            <th>{item.total_tests}</th>
                            <th>{item.total_recovered}</th>
                        </StyledWrapperBig>
            )
        })
    )
    foolowScanSmall = () => (
        this.state.countryTab.map((item,index)=> {
            return (
                <StyledWrapperSmall value={parseInt(item.cases)} key={item.country_name}>
                    <UlStyl key={item.country_name}> 
                        <StyledSpanAbsolute>{index+1}</StyledSpanAbsolute>
                        <StyledLi><b>Państwo: {item.country_name}</b></StyledLi>
                        <StyledLi>Liczba chorych: {item.active_cases}</StyledLi>
                        <StyledLi>Nowe przypadki: {item.new_cases}</StyledLi>
                        <StyledLi>Nowe zgony: {item.new_deaths}</StyledLi>
                        <StyledLi>Wszystkich przypadków: {item.cases}</StyledLi>
                        <StyledLi>Wszystkich zgonów: {item.deaths}</StyledLi>
                        <StyledLi>Zrobionych testów: {item.total_tests}</StyledLi>
                        <StyledLi>Osób wyzdrowiałych: {item.total_recovered}</StyledLi>
                    </UlStyl>
                </StyledWrapperSmall>
            )
        })
    )

render() {
    const {allCases,newCases,newDead ,criticalState ,allTotalCases ,allTotalDead ,allTotalRecovered, day } = this.state;
    return (
        <div>
            
            {this.props.allState?(<>
               
            </>): null}



            {this.props.newCasesProps ? (<><StyledWrapperTitle><StyledTitle>Coronavirus wykaz wszystkich zakażeń</StyledTitle></StyledWrapperTitle>
           <UlStyl>
                {newCases?<><LiStyl>Nowe przypadki: </LiStyl> <DescriptionStyl>{newCases} osób.</DescriptionStyl> 
                <LiStyl>Zgony: </LiStyl> <DescriptionStyl>{newDead} osób</DescriptionStyl> 
                <LiStyl>W stanie krytycznym:  </LiStyl> <DescriptionStyl>{criticalState} osób</DescriptionStyl> 
                <LiStyl>Liczba chorych:  </LiStyl> <DescriptionStyl>{allCases} osób</DescriptionStyl></>:null}
           </UlStyl></>):null}
            
            
            {this.props.globalCasesProps&&(<UlStyl>
                {allTotalCases?
                <>
                {this.props.StyledProps?
                (<>
                        <StyledDay>Aktualizacja z dnia <div> <b>{day}</b></div> </StyledDay>
                        <LiStyleMainPages>Wszystkie przypadki Covid:</LiStyleMainPages> <DescriptionStylMainPages> {allTotalCases} </DescriptionStylMainPages>
                        <LiStyleMainPages>Wszystkie zgony:</LiStyleMainPages> <DescriptionStylMainPages>{allTotalDead} </DescriptionStylMainPages> 
                        <LiStyleMainPages>Uzdrowieni: </LiStyleMainPages> <DescriptionStylMainPages>{allTotalRecovered} </DescriptionStylMainPages>
                        
                </>
                
                ) : (
                    <>
                        <LiStyl>Wszystkie przypadki Covid:</LiStyl> <DescriptionStyl> {allTotalCases} osób</DescriptionStyl>
                        <LiStyl>Wszystkie zgony:</LiStyl> <DescriptionStyl>{allTotalDead} osób</DescriptionStyl> 
                        <LiStyl>Uzdrowieni: </LiStyl> <DescriptionStyl>{allTotalRecovered} osób</DescriptionStyl>
                    </>
                )}
                </>
                :<>
                <div style={{textAlign:'center'}}><LoadingIndicatior/></div>
                </>
                }
            </UlStyl>)}


                {this.props.TeenCountriesProps&&(<>
                    {allTotalCases&& <StyledWrapperTitle><StyledTitle>  Państwa z największą ilością zachorowań: </StyledTitle></StyledWrapperTitle>}
           
                    <MediaQuery minDeviceWidth={900}>
                     {(matches) => {
                         if (!matches) {
                         return this.foolowScanSmall()
                         } else {
                         return allTotalCases&&<StyledTable>
                         <thead style={{backgroundColor:'#ecf0f1'}}>
                         <tr>
                             <th>Państwo</th>
                             <th>Liczba chorych</th>
                             <th>Nowe przypadki</th>
                             <th>Nowych zgonów:</th>
                             
                             
                             <th>Wszystkich przypadków</th>
                             <th>Wszystkich zgonów</th>
                             <th>Zrobionych testów</th>
                             <th>Osób wyzdrowiałych</th>
                         </tr>
                         </thead> 
                         <tbody>
                             {this.foolowScanBig()}
                         </tbody>
                     </StyledTable>;
                         }
                     }}
                     </MediaQuery></>
                )}
            
        </div>
        )
    }
}


const StyledTable = styled.table`
    padding: 20px 10px;
    border: 1px solid black;
    width: 90%;
    margin: 20px auto;
    max-width: 1200px;
    th, td {
  padding: 15px;
  text-align: center;
  border: 1px solid #bdc3c7;
}
`

const StyledLi = styled.li`
    margin: 10px 0;
    text-align: left;
    padding: 0;
    text-align:center;
    font-size: 13px;
    :first-of-type{
        font-size: 25px;
        margin-bottom: 5px;
        
    }
    :nth-child(2) {
        font-size: 19px;
    }
    :nth-child(3) {
        font-size: 18px;
    }

    
    @media(min-width: 350px) {
        font-size: 15px;
        :nth-child(1){
        font-size: 18px;
    }
    }
    @media(min-width:400px){
        font-size: 18px;
        :nth-child(1){
        font-size: 20px;
    }
    }
`
const StyledWrapperSmall = styled.div`
    background-color: ${({value}) => value===1 || value > 250 ? '#660033' : value > 200 ? '#330033' : value>150 ? '#000033' : '#262626' };
    margin: 40px;
    color: white;
    border-radius: 10px;
    padding: 10px;
    font-family: 'Baloo 2', cursive;
    margin: 0px 20px;
    margin-top: 40px;
    @media(min-width: 350px) {
        margin: 40px;
    }
    ul {
            li:first-of-type{
                border-bottom: 2px solid ${({value}) => value===1 || value > 250 ? 'rgba(140,0,51,0.7)' : value > 200 ? '#8e44ad' : value>150 ? '#192a56' : '#95a5a6' };
        }
    }

`
const StyledWrapperBig = styled.tr`
    background-color: ${({value}) => value===1 || value > 250 ? '#c0392b' : value > 200 ? '#f39c12' : value>150 ? '#f1c40f' : '#2ecc71' };
    margin: 40px;
    border-radius: 10px;
    padding: 10px;
    font-family: 'Baloo 2', cursive;
    margin: 0px 20px;
    margin-top: 40px;
    @media(min-width: 350px) {
        margin: 40px;
    }

`

const LiStyleMainPages = styled.li`
    text-align: center;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 18px;
    padding-top: 30px;
    color: white;
`

const DescriptionStylMainPages = styled.div`
    text-align: center;
    font-family: 'Baloo 2', cursive;
    font-size: 24px;
    font-weight: 700;
    width: 80%;
    margin: 10px auto;
    background-color: #3498db;
    height: 50px;
    border-radius: 15px;
    padding-top: 8px;
    color: black;
`

const StyledDay = styled.div`
    text-align: center;
    font-family: 'Josefin Sans',sans-serif;
    margin: 10px auto;
    color: #bdc3c7;
`
const StyledSpanAbsolute = styled.span`
    position: absolute;
    top: 0px; 
    left: 10px;
    color: white;
    font-size: 18px;
`
