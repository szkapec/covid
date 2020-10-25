import React, { Component } from 'react'
import Chart from '../Chart/Chart';
import styled from 'styled-components';
export default class FetchStatisticPoland extends Component {
   
    state={
        firstDay: '', tabsToChart: '', Chart0: '', Chart1: '', Chart2: '', Chart3: '', Chart4: '', Chart5: '', Chart6: '',
    }

    componentDidMount(){
        this.wykonaj()
    }
  
    wykonaj = () => {
        const api = 'https://api.covid19api.com/total/dayone/country/poland'
        try {
            fetch(api)
            .then(api=> {
                if(api.ok){
                    return api
                }
                
            })
            .then(api => api.json())
            .then(api => {
                let tabsToChart = [];
                for(var i=0; i<api.length; i=i+10){
                    tabsToChart.push(api[i])
                }
               
                this.setState({
                    firstDay: api.length,
                    tabsToChart,
                    Chart0: parseInt(tabsToChart[0].Active),
                    Chart1: tabsToChart[1].Active,
                    Chart2: tabsToChart[2].Active,
                    Chart3: tabsToChart[3].Active,
                    Chart4: tabsToChart[4].Active,
                    Chart5: tabsToChart[5].Active,
                    Chart6: tabsToChart[6].Active,
                    toDay: api[api.length-1].Active,
                })
            }).catch(err => {
                console.log(err)
            })
        } catch (error) {
            console.log(error)
            }
        }
   
    render() {

        return (
            <div>
                    <StyledTitle>Ilość dni od rozpoczęcia pandemi w Polsce <StyledFirstDay>{this.state.firstDay}</StyledFirstDay></StyledTitle>
                    <Chart item={this.state} legendPosition="top" titleText="Wykres 5 dni pogody" displayTitle bar pie line/>
            </div>
        )
    }
}

const StyledTitle = styled.div`
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    padding-top: 20px;
    color: white;
    @media(min-width: 350px){
        font-size: 16px;
    }
    @media(min-width: 600px){
        font-size: 18px;
    }
`
const StyledFirstDay = styled.div`
    width: 100px;
    height: 50px;
    border-radius: 15px;
    background-color: #0a3d62;
    font-family: 'Baloo 2',cursive;
    font-weight: 800;
    font-size: 20px;
    padding-top: 10px;
    margin: 10px auto;
    color: white;
    @media(min-width: 350px){
        font-size: 22px;
    }
    @media(min-width: 600px){
        font-size: 24px;
        width: 140px;
    }
    

` 