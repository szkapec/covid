import React, {useEffect, useState } from 'react'
import styled, {keyframes} from 'styled-components';

const flip = keyframes`
    0%,100% {
        animation-timing-function: cubic-bezier(0.5,0,1,0.5)
    }
    0% {
        transform: rotateY(0deg);
    }
    50% {
        transform: rotateY(1800deg);
        animation-timing-function: cubic-bezier(0,0.5,0.5,1)
    }
    100% {
        transform: rotateY(3600deg);
    }
`



const Root = styled.div`
    display: inline-block;
    transform: translateZ(1px);
`

const Content = styled.div`
    display: inline-block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: ${({theme})=> '#7f8c8d'};
    animation: ${flip} 2.4s cubic-bezier(0,0.2,0.8,1) infinite;
    margin: 10px auto;
    @media(min-width: 400px) {
        width: 100px;
        height: 100px;
    }
`



export default function LoadingIndicator() {
    const [count, setCount] = useState(true);
    
    useEffect(() => {
        setTimeout(() => setCount(false), 6000);
    },[])

    return (
        <div style={{backgroundColor:"#1c1e27", color:"white"}}>
            {count?
            <>
            <div>Wczytuje dane...</div>
            <Root>
                    <Content/>
            </Root> </>: 
            <div>
                Błąd serwera prosze spróbować póżniej.    
            </div>}            
        </div>
    )
}
