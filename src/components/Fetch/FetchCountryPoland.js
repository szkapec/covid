import React, { Component } from 'react'
import {StyledWrapper, StyledUl, StyledLi, StyledTitle, StyledWrapperTitle, LiStyl, UlStyl, DescriptionStyl} from './StyleFetch';
import styled from 'styled-components';
import LoadingIndicatior from '../Loading/LoadingIndicator';
////////////Ogólnie zakarzenia w POLSCE 

export default class FetchCountryPoland extends Component {

        state = {
            globalNewConfirmed: '',
            globalNewDead: '',
            globalNewRecovered: '',
            globalTotalConfirmed: '',
            globalTotalDeaths: '',
            globalTotalRecovered: '',
            error: '',
            active: '',
            activeNew: '',
            recovered: '',
            total: '',
            day: '',
            totalDeaths: '',
            newDeaths: '',
            tests: '',
            countryApi: '',
        }
        
        componentDidMount(){
            this.performSummary();
            this.fetchCountry();
        }

        fetchCountry = () => {

            fetch(`https://covid-193.p.rapidapi.com/statistics?country=poland`, {
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


        performSummary = () => {

            const api = 'https://api.covid19api.com/summary'
            try {
                
                fetch(api)
                .then(api=> {
                    if(api.ok){
                        return api
                    }
                })
                .then(api => api.json())
                .then(api => {
                    this.setState(() =>  ({
                        globalNewConfirmed: api.Global.NewConfirmed,
                        globalNewDead: api.Global.NewDeaths,
                        globalNewRecovered: api.Global.NewRecovered,
                        globalTotalConfirmed: api.Global.TotalConfirmed,
                        globalTotalDeaths: api.Global.TotalDeaths,
                        globalTotalRecovered: api.Global.TotalRecovered,
                    }))
                }).catch(err => {
                    console.log(err);
                });
            } catch (error) {
                console.log(error , "FetchCounryPoland")
            }
            }
    render() {

        const {active, activeNew, recovered, totalDeaths, newDeaths, tests, 

            globalNewConfirmed, globalNewDead, globalNewRecovered, globalTotalConfirmed, globalTotalDeaths, globalTotalRecovered} = this.state;


            const polishInfo = (
                <div>
                    <StyledWrapperTitle><StyledTitle style={{color:'white'}}>Dzisiejsze informacje o COVID-19 w Polsce.</StyledTitle></StyledWrapperTitle>
                    <UlStyl style={{paddingTop: '10px'}}>
                        <LiStyl><b>Dzisiaj zarażeni: </b></LiStyl> <DescriptionStyl>{activeNew} osób</DescriptionStyl>
                        <LiStyl><b>Dzisiejsze zgony:</b></LiStyl> <DescriptionStyl>{newDeaths} osób</DescriptionStyl>
                    </UlStyl>
                    <UlStyl>
                        <LiStyl><b>Wszystkie zgony:</b></LiStyl> <DescriptionStyl> {totalDeaths} osób</DescriptionStyl>
                        <LiStyl><b>Wszyscy zarażeni:</b></LiStyl> <DescriptionStyl>{active} osób</DescriptionStyl>
                        <LiStyl><b>Wszyscy uzdrowieni:</b></LiStyl> <DescriptionStyl>{recovered} osób</DescriptionStyl>
                        <LiStyl><b>Wszystkie testy:</b></LiStyl> <DescriptionStyl> {tests} testów</DescriptionStyl>
                    </UlStyl>
                </div>
            )

            const global =  (
                    <>
                    <StyledTitle>Dane globalne.</StyledTitle>
                    <StyledUl>
                        <StyledLi><b>Nowi zarażeni:</b> {globalNewConfirmed} osób</StyledLi>
                        <StyledLi><b>Nowe zgony: </b>{globalNewDead} osób</StyledLi>
                        <StyledLi><b>Nowi uzdrowieni:</b> {globalNewRecovered} osób</StyledLi>
                    </StyledUl>
                    <StyledUl>
                        <StyledLi><b>Nowi uzdrowieni:</b> {globalTotalConfirmed} osób</StyledLi>
                        <StyledLi><b>Wszysctkie zgony:</b> {globalTotalDeaths} osób</StyledLi>
                        <StyledLi><b>Wszyscy uzdrowieni:</b> {globalTotalRecovered} osób</StyledLi>
                    </StyledUl>
                    </>
            )
        return (
            <StyledWrapper>
                    {globalNewConfirmed?this.props.poland?polishInfo:null: <StyledTitle><LoadingIndicatior></LoadingIndicatior></StyledTitle>}
                <div>
                    {globalTotalConfirmed?this.props.global&&global: null}
                </div>
            </StyledWrapper>
        )
    }
}

