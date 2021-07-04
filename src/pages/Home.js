
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import '../stylesheets/pages/Home.scss';
import {Circle} from '../stylesheets/components/icons';


const Home = (props) => {


  return (
    <div>
      <h1>Hello</h1>
      <Circle color= {props.color}/>
    </div>
  )
}

export default Home;