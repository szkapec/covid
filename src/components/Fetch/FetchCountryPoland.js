import React, { Component } from 'react'
import {StyledWrapper, StyledUl, StyledLi, StyledTitle, StyledWrapperTitle, LiStyl, UlStyl, DescriptionStyl} from './StyleFetch';
import styled from 'styled-components';
import LoadingIndicatior from '../Loading/LoadingIndicator';
////////////Ogólnie zakarzenia w POLSCE 

export default class FetchCountryPoland extends Component {

        state = {
            country: '',
            newConfirmed: '',
            newDead: '',
            newRecovery: '',
            totalInfection: '',
            totalDead: '',
            totalRecovery: '',
            zmien: '',
            globalNewConfirmed: '',
            globalNewDead: '',
            globalNewRecovered: '',
            globalTotalConfirmed: '',
            globalTotalDeaths: '',
            globalTotalRecovered: '',
        }
        
        componentDidMount(){
            this.performSummary();
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
                    console.log(api)
                    this.setState(() =>  ({
                        country: api.Countries[132].Country,
                        newConfirmed: api.Countries[132].NewConfirmed, //nowe potwierdzone przypadki
                        newDead: api.Countries[132].NewDeaths,
                        newRecovery: api.Countries[132].NewRecovered,
                        totalInfection: api.Countries[132].TotalConfirmed,
                        totalDead: api.Countries[132].TotalDeaths,
                        totalRecovery: api.Countries[132].TotalRecovered,

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

        const {country, newConfirmed, newDead, newRecovery, totalInfection, totalDead, totalRecovery,
            globalNewConfirmed, globalNewDead, globalNewRecovered, globalTotalConfirmed, globalTotalDeaths, globalTotalRecovered} = this.state;


            const polishInfo = (
                <div>
                    <StyledWrapperTitle><StyledTitle style={{color:'white'}}>Dzisiejsze informacje o COVID-19 w Polsce.</StyledTitle></StyledWrapperTitle>
                    <UlStyl style={{paddingTop: '10px'}}>
                        <LiStyl><b>Dzisiaj zarażeni: </b></LiStyl> <DescriptionStyl>{newConfirmed} osób</DescriptionStyl>
                        <LiStyl><b>Dzisiejsze zgony:</b></LiStyl> <DescriptionStyl>{newDead} osób</DescriptionStyl>
                        <LiStyl><b>Uzdrowieni:</b> </LiStyl> <DescriptionStyl>{newRecovery} osób</DescriptionStyl>
                    </UlStyl>

                    <UlStyl>
                        <LiStyl><b>Wszyscy zarażeni:</b></LiStyl> <DescriptionStyl>{totalInfection} osób</DescriptionStyl>
                        <LiStyl><b>Wszystkie zgony:</b></LiStyl> <DescriptionStyl> {totalDead} osób</DescriptionStyl>
                        <LiStyl><b>Wszyscy uzdrowieni:</b></LiStyl> <DescriptionStyl>{totalRecovery} osób</DescriptionStyl>
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

