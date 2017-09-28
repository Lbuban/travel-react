import React, { Component } from 'react';
import { Carousel, Caption, Item } from 'react-bootstrap';
import './Hero.css';


class Hero extends Component {
    render() {
      return (

            <Carousel>
              <Carousel.Item>
                <img width={3000} height={1500} alt="900x500" src="assets/images/alaska.jpg"/>
                <Carousel.Caption>
                  <h3>Welcome to my travel site</h3>
                  <p>This site is about places I would like to travel</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={3000} height={1500} alt="900x500" src="assets/images/cuba.jpg"/>
                <Carousel.Caption>
                  <h3>Welcome to my travel site</h3>
                  <p>This site is about places I would like to travel</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={3000} height={1500} alt="900x500" src="assets/images/beach.jpg"/>
                <Carousel.Caption>
                  <h3>Welcome to my travel site</h3>
                  <p>This site is about places I would like to travel</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={3000} height={1500} alt="900x500" src="assets/images/alaska2.jpg"/>
                <Carousel.Caption>
                  <h3>Welcome to my travel site</h3>
                  <p>This site is about places I would like to travel</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          
        );
    }
  }
  export default Hero;


  
  
  
