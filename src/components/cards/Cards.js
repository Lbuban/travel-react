import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import './Cards.css';

class Cards extends Component {
    render() {
      return (
      
          
      <Grid>
        <Row className="show-grid">
             <Col sm={6} md={3}>
                <img src={this.props.picture} height="200px" />
                <h2> {this.props.country}</h2>
                <a href={this.props.link}> {this.props.title}</a>
              </Col>
          </Row>
      </Grid>
    );
    }
  }
export default Cards;