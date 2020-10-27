
import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';


export default class Navbar extends Component {


  changeNavbar = () => {
    var x = document.getElementById("myTopnav");
    console.log(x.className)
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  render() {


    return (

  <StyledTopNav>
    <div className="topnav" id="myTopnav">

        <StyledLi><NavLink exact to='/'  style={{color:'#95a5a6'}}   activeStyle={{fontWeight: "700",color: "#ecf0f1"}} className="active">
            Strona główna
        </NavLink></StyledLi>
        <StyledLi><NavLink exact to="/wszystkie" style={{color:'#95a5a6'}} activeStyle={{fontWeight: "700",color: "#ecf0f1"}}  className="">
            Wszystkie zakażenia
        </NavLink></StyledLi> 
        <StyledLi><NavLink exact to='/dzisiaj' style={{color:'#95a5a6'}} activeStyle={{fontWeight: "700",color: "#ecf0f1"}} className="">
            Zakażenia w Polsce
        </NavLink></StyledLi>
        <StyledLi><NavLink exact to='/kraj' style={{color:'#95a5a6'}} activeStyle={{fontWeight: "700",color: "#ecf0f1"}} className="">
            Zakażenia w krajach  
        </NavLink></StyledLi>
        <li  className="icon" onClick={this.changeNavbar}>
          <i className="fa fa-bars"></i>
        </li>
      </div>

  </StyledTopNav>

      

    );
  }
};

const StyledTopNav = styled.nav`
   
.topnav {
  overflow: hidden;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.topnav li {
  float: left;
  display: flex;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  width: 200px;
  text-decoration: none;
  font-size: 17px;
}

.topnav li:hover {
  background-color: #4444;
  color: black;
}

.topnav .icon {
  display: none;
  width: 70px;
}

@media screen and (max-width: 700px) {
  .topnav li:not(:first-child) {display: none;}
  .topnav li.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 700px) {
  .topnav.responsive {position: relative;    justify-content: left;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
    width: 70px;
    margin-right: 10px;
  }
  .topnav.responsive li {
    float: none;
    display: block;
    width: 70%;
    text-align: left;
    flex-wrap: wrap;
  }
}

`




const StyledLi = styled.li`
  text-decoration: none;
  list-style: none;
`