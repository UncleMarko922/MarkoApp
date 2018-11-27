import React, { Component } from 'react'
import boobooclub from '../../images/boobooclub.png'
import shred1 from '../../images/shred1.png'
import shred2 from '../../images/shred2.png'
import shred3 from '../../images/shred3.png'
import shred4 from '../../images/shred4.png'
import shred5 from '../../images/shred5.png'

class Home extends Component {
  render() {

    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
    });

    return (
      <section className="slider">
          <ul className="slides">
              <li>
                  <img src={boobooclub} alt="adorbz"/>
              </li>
              <li>
                  <img src={shred1} alt="guitar1"/>
              </li>
              <li>
                  <img src={shred2} alt="guitar2"/>
              </li>
              <li>
                  <img src={shred3} alt="guitar3"/>
              </li>
              <li>
                  <img src={shred4} alt="guitar4"/>
              </li>
              <li>
                  <img src={shred5} alt="guitar5"/>
              </li>
          </ul>
      </section>

    )
  }
}

export default Home