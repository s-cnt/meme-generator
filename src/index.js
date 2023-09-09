import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';


import Myinfo from './component/myinfo';

import Myapp from './component/Myapp';
import App1 from './component/app1';
import App2 from './component/app2';
import App from './App';
import App3 from './app3';
import App4 from './app4';
import App5 from './app5';

import Todolist from './life_cycle';

import App6 from './app6';
import Ex from './ex';

import Ex2 from './ex2';
import Todoitem from './component/Todoitem';

import Ex3 from './ex3';

import Forms from './forms';
import Form2 from './forms2';
import Mmpg from './mempg';

// function Myapp() {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>This is starting of course</li>
//           <li>I learn react.Js</li>
//           <li>Build something productive</li>
//         </ul>
//       </nav>
//       <main>
//         <p>This is where most of my content will go......</p>
//       </main>
//       <Footer> </Footer>

//     </>
//   )
// }

// function Myinfo() {
//   return (
//     <>
//       <h1>Sushant suman</h1>
//       <p>I am CS student at IIITg</p>
//       <ul>
//         <li>Himachal Pardesh</li>
//         <li>Jammu Kashmir</li>
//         <li>Uttarakhand</li>
//       </ul>

//     </>
//   )
// }

const styles = {
  fontSize: 30

}

function Ppu() {
  // const firtsName = "Sushant"
  // const lastName = "Suman"
  const date = new Date()
  const hours = date.getHours();
  let timeofDay;
  if (hours < 12) {
    timeofDay = "Morning"
    styles.color = "#ffff00"

  }

  else if (hours >= 12 && hours < 17) {
    timeofDay = "Afternoon"
    styles.color = "#9acd32"
  }

  else {

    timeofDay = "Night"
    styles.color = "#6495ed"

  }


  // return <h1> {firtsName + " " + lastName}</h1>
  // return <h1>it is currently about {date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}</h1>

  // const styles = {
  //   fontSize: 30

  // }

  return (
    <h1 style={styles}>Good {timeofDay + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}</h1>

  )

}

// use of class based method to return

class P1 extends React.Component {

  render() {

    return (
      <div>
        <Header />
        <Greeting />

      </div>
    )
  }

}

class Header extends React.Component {

  render() {
    return (
      <header>
        <p>Welcome,Sushant ! {this.props.username}</p>
      </header>
    )
  }


}

class Greeting extends Component {


  render() {

    const date = new Date()
    const hours = date.getHours();
    let timeofDay;
    if (hours < 12) {
      timeofDay = "Morning"
      styles.color = "#ffff00"

    }

    else if (hours >= 12 && hours < 17) {
      timeofDay = "Afternoon"
      styles.color = "#9acd32"
    }

    else {

      timeofDay = "Night"
      styles.color = "#6495ed"

    }

    return (
      <h1 style={styles}>Good {timeofDay + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()} to you, sir or madam!</h1>
    )

  }

}




ReactDOM.render(
  <>

    {/*
    <h1>Hello</h1>
    <p>This is a pragraph</p>
  */}

    {/*
    <ul>
      <li>This is starting of course</li>
      <li>I learn react.Js</li>
      <li>Build something productive</li>
    </ul>
  */}

    {/* <Myapp /> */}

    {/* <App1 /> */}
    {/* <Myinfo /> */}

    {/* <Ppu /> */}


    {/* <App2 /> */}

    {/* <App /> */}


    {/* <P1 />

    <App3 />

    <App4 /> */}

    {/* <App5 /> */}

    {/* <Todolist /> */}

    {/* <App6 /> */}

    {/* <Ex /> */}

    {/* <Ex2 /> */}

    {/* <Todoitem /> */}

    {/* <Ex3 /> */}

    {/* <Forms /> */}

    {/* <Form2 /> */}

    <Mmpg />


  </>, document.getElementById("root")
);


var myNewp = document.createElement("p")
myNewp.innerHTML = "This is a paragraph"