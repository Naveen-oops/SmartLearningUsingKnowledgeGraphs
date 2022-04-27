import React, { useState, useEffect } from 'react';
import introJs from 'intro.js';
import 'intro.js/introjs.css';

const guide = () => {
    
    useEffect(()=>{
        introJs().start();
    });

  return (
    <div>
       
        <div data-title="Welcome!" 
             data-intro="Hello World! 👋" 
             className="card-demo"
        >
            <div className="card shadow--md">
                
                <div className="card__image" data-intro="Intro.js can highlight on elements">
                <img
                    src="image1.jpg" width="200px" height="250px"
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

export default guide