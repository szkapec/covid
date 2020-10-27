import React, { Component } from 'react'
import styled from 'styled-components';
import Chart from '../Chart/Chart';
export default class FetchCountryRandom extends Component {

    state={
        country: 'Italy',
        active: ''
        ,activeNew: ''
        ,recovered: ''
        ,total: ''
        ,day: ''
        ,totalDeaths: ''
        ,newDeaths: ''
        ,tests: '',
        error: true,
        countryApi: '',
        population: '',
    }

    fetchCountry = () => {
        console.log(this.state.country)
        fetch(`https://covid-193.p.rapidapi.com/statistics?country=${this.state.country}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
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
     console.log(api)
       this.setState({
           error: true,
           active: api.response[0].cases.active,
           activeNew: api.response[0].cases.new,
           recovered: api.response[0].cases.recovered,
           total: api.response[0].cases.total,
            population: api.response[0].population,
           day: api.response[0].day,

           totalDeaths: api.response[0].deaths.total,
           newDeaths: api.response[0].deaths.new,
           tests: api.response[0].tests.total,
            countryApi: api.response[0].country,
       })
       
    })
    .catch(err => {
        console.log(err);
        this.setState({
            error: false,
            active: '',
            countryApi: '',
        })
    });
}
    changeInput = (e) => {
        if(e.target.value.length>3){
            console.log(this.state.value)
            this.setState({
                country: e.target.value,
                
            })
        }
    }
    sumbit = () => {
        this.fetchCountry()
    }


    render() {

            const {country, active, activeNew, recovered, total, day, totalDeaths, newDeaths, tests, error, countryApi, population} = this.state;
        return (
            <div>
                <StyledWrapper>
                    <input placeholder="Italy" type="text" onChange={this.changeInput}></input>
                    <button onClick={this.sumbit}>Wyszukaj</button>
                </StyledWrapper>
               
                <StyledContainer>
                    
                {countryApi!==""?<>
                   
                    <StyledCard>
                    <StyledH2>Wyniki wyszukiwania dla: {countryApi}</StyledH2>
                            <StyledH3>Aktywne przypadki covid-19</StyledH3>
                        <div>
                            <StyledActive>
                                {total}
                                
                                <p>Wszystkich</p>
                            </StyledActive>
                            <StyledSpanLeft>
                                <p style={{fontFamily:'Rancho'}}>
                                    {activeNew}
                                    <span style={{color:'white',fontSize:'14px'}}>({((activeNew*100)/active).toFixed(1)})%</span> 
                                    </p>
                                <p>Nowych</p>
                            </StyledSpanLeft>
                            <StyledSpanRight>
                                <p style={{fontFamily:'Rancho'}}>
                                    {active}
                                    <span style={{color:'white',fontSize:'14px'}}>({((active*100)/total).toFixed(1)})%</span> 
                                    </p>
                                <p>Aktywnych</p>
                            </StyledSpanRight>
                        </div>
                    </StyledCard>

                    <StyledCard>
                        <StyledH3>Zgony spowodowane wirusem</StyledH3>
                        <div>
                            <StyledActive>
                                <span style={{color: 'red'}}>{totalDeaths}</span>
                                <span style={{color:'white',fontSize:'14px', marginLeft: '1px'}}>({((totalDeaths*100)/total).toFixed(1)})%</span>
                                <p>Wszystkie zgony</p>
                            </StyledActive>
                            <StyledSpanLeft>
                                <p style={{fontFamily:'Rancho'}}>{newDeaths} <span style={{color:'white',fontSize:'14px', marginLeft: '1px'}}>({((newDeaths*100)/totalDeaths).toFixed(1)})%</span></p>
                                <p>Nowe zgony</p>
                            </StyledSpanLeft>
                            <StyledSpanRight>
                                <p style={{fontFamily:'Rancho'}}>
                                    {recovered}
                                    <span style={{color:'white',fontSize:'14px', marginLeft: '1px'}}>({((recovered*100)/total).toFixed(1)})%</span>
                                    </p>
                                <p>Wyzdrowiałych</p>
                            </StyledSpanRight>
                        </div>
                    </StyledCard>

                    <StyledCard>
                    <StyledH3>Informacje ogólne</StyledH3>
                        <div>
                        <StyledActive>
                            <p>Aktualizacje z</p>
                            {day}
                            </StyledActive>
                            <StyledSpanLeft>
                                <p style={{fontFamily:'Rancho'}}>{tests}</p>
                                <p>Zrobione <br/> testy</p>
                            </StyledSpanLeft>
                            <StyledSpanRight>
                                <p style={{fontFamily:'Rancho'}}>{tests-tests/10}</p>
                                <p>Ilość <br/> testów</p>
                            </StyledSpanRight>
                        </div>
                    </StyledCard>


                    <StyledCard>
                    <StyledH3>Populacja</StyledH3>
                        <div>
                        <StyledActive>
                            {population} wszystkich
                            </StyledActive>
                            <StyledSpanLeft>
                                <p style={{fontFamily:'Rancho'}}>{active}</p>
                                <p>Aktywnych covid</p>
                            </StyledSpanLeft>
                            <StyledSpanRight>
                                <p style={{fontFamily:'Rancho'}}>{tests}</p>
                                <p>Ilość <br/> testów</p>
                            </StyledSpanRight>
                        </div>
                    </StyledCard>

                    
                </>: !error? `Nie ma takiego państwa "${country}"` : `Wpisz państwo`}
                </StyledContainer>
                {active!=="" && <Chart item={this.state} legendPosition="top" titleText="Wykres 5 dni pogody" displayTitle  pie />}
            </div>
        )
    }
}

const StyledH2 = styled.h2`
    font-size: 18px;
    padding: 10px auto;
`
const StyledActive = styled.div`
    font-size: 22px;
    padding-top: 15px;
    border: 1px solid #ddd;
    p{
        font-size: 20px;
    }
`
const StyledSpanLeft = styled.span`
    float: left;
    width: 50%;
    font-size: 20px;
    border: 1px solid #ddd;
    color: white;
    border-bottom-left-radius: 10px;
    p:nth-child(1){
        color: red;
        margin: 10px 0;
        font-size: 30px;
    }
`
const StyledSpanRight = styled.span`
    float: right;
    width: 50%;
    font-size: 20px;
    border: 1px solid #ddd;
    color:white;
    border-bottom-right-radius: 10px;
    p:nth-child(1){
        color: red;
        margin: 10px 0;
        font-size: 30px;
    }
`
const StyledLi = styled.li`
    text-decoration: none;
    list-style: none;
    padding: 10px;

`
const StyledCard = styled.div`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
const StyledContainer = styled.div`

    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 80px;
    width: 300px;
    min-width: 300px;
    margin: 40px auto;
    text-align: center;
    color: white;
    font-family: 'Baloo 2',cursive;

`

const StyledWrapper = styled.div`
    width: 300px;
    max-width: 600px;
    margin: 40px auto;
    text-align: center;
    button {
        border: none;
        outline: none;
        margin: 20px 20px 0;
        padding: 5px 10px;

    }
`

const StyledH3 = styled.div`
      background-color: #ddd;
        color: black;
        width:100%;
        padding: 10px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
`