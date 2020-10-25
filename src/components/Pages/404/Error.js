import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import {StyledWrapperTitle,StyledTitle} from '../../Fetch/StyleFetch';
import styled from 'styled-components';
import LoadingIndicatior from '../../Loading/LoadingIndicator';
export default class Error extends Component {
    render() {
        return (
            <div>
                <StyledTitle style={{fontSize:'30px', color:'white'}}>błąd 404</StyledTitle>
                 <StyledWrapperTitle style={{margin: '20px auto 50px'}}><StyledTitle>Strona o podanym adresie <StyledSpan>{this.props.location.pathname}/</StyledSpan> nie istnieje  </StyledTitle></StyledWrapperTitle>   
                <StyledButton> <NavLink style={{color: 'white'}} to="/">Strona główna</NavLink></StyledButton>
                 <Styleddiv><i className="fas fa-virus" style={{width: '100px', height:'100px'}}></i></Styleddiv>
            </div>
        )
    }
}

const Styleddiv = styled.div`
    width: 100px;
    height: 100px;
    margin: 30px auto;
    transition-delay: 4s;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-name: example, delay ;
    color: white;


    /* wolny start */
    animation-timing-function: ease-in; 

    @keyframes example {
        from { transform: rotate(0deg)}
        to { transform: rotate(360deg)}
    }
`

const StyledSpan = styled.span`
    font-family: 'Baloo 2',cursive;
    font-size: 20px;
`
const StyledButton = styled.div`
    font-weight: 700;
    font-size: 16px;
    width: 150px;
    height: 50px;
    padding: 10px 20px;
    text-align: center;
    background-color: #2c3e50;
    border-radius: 10px;
    text-decoration: none;
    cursor: pointer;
    margin: 10px auto 40px;

`
