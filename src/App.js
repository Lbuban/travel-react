import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import Cards from './components/cards/Cards';
import Footer from './components/footer/Footer';
import Table from './components/table/Table';


class App extends Component {
  render() {
    return (
  
        <div>
        <Navigation />
        <Hero />
        <div className="shit">
              <Cards picture="/assets/images/spain_flag.svg" country="Spain" link="http://www.spain.info/en_US/" title="Spain Tourism Site" />
              <Cards picture="/assets/images/italy_flag.svg" country="Italy" link="http://www.italia.it/en/home.html" title="Italy Tourism Site" />
              <Cards picture="/assets/images/aruba_flag.svg" country="Aruba" link="http://www.arubatourism.com/" title="Aruba Tourism Site" />
              <Cards picture="/assets/images/chile_flag.svg" country="Chile" link="http://chile.travel/en/" title="Chile Tourism Site" />
        </div>
        
        <div className="page-row" id="travel-table">
        <h3> Some information about the places I would like to visit</h3>
          <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%"> 
            <tr>
              <th>Destination</th>
              <th>Capital</th>
              <th>Official Language</th>
              <th>Population (approx.)</th>
              <th>National Bird</th>
            </tr>
            <Table destination="Spain" capital="Madrid" language="Spanish" population="46.77 million" bird="Eagle" />
            <Table destination="Italy" capital="Rome" language="Italian" population="59.83 million" bird="Bluebirds" />
            <Table destination="Aruba" capital="Oranjestad" language="Dutch" population="102,911" bird="Aruban Burrowing Owl" />
            <Table destination="Chile" capital="Santiago" language="Spanish" population="17.62 million" bird="Andean Condor" />
          </table>
        </div>
        <Footer />
        </div>
      
 
    );
  }
}

export default App;
