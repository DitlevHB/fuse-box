import * as React from 'react';
import { Component } from 'react';

import { Blob } from "react-blob";

import * as ReactDOM from 'react-dom';
import Rodal from "rodal";

import { useSprings, animated, interpolate } from "react-spring"

import "animate.css/animate.min.css";
import { Other } from './Other';
import './index.css';

class App extends Component {
  render() {
    const snapshot = { isDraggingOver: false };
    function getSourceStyle(opts) {
      return {};
    }

    return (
      <div>
        222
        <Other></Other>
        <Blob />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
