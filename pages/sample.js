import PropTypes from 'prop-types'
import React, { Component } from 'react'
import introJs from 'intro.js';
import 'intro.js/introjs.css';

export class sample extends Component {
  static propTypes = {}

  componentDidMount() {
    introJs().start();
  }

  render() {
    return (
      <div>
           <div data-title="Welcome!" data-intro="Hello World! 👋" className="card-demo">
            <div className="card shadow--md">
                
                <div className="card__image" data-intro="Intro.js can highlight on elements">
                <img
                    src="..."
                    alt="Image alt text"
                    title="Logo Title Text 1"
                />
                </div>

                <div className="card__body" data-title="Farewell!" data-intro="And this is the last step!">
                <h4>Quaco Lighthouse</h4>
                <small>
                    The Quaco Head Lighthouse is a well maintained lighthouse close to St.
                    Martins. It is a short, beautiful walk to the lighthouse along the
                    seashore.
                </small>
                </div>
            </div>
        </div>

      </div>
    )
  }
}

export default sample