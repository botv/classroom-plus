import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './components/TopNav';

import 'bootstrap/dist/css/bootstrap.min.css'

function Popup() {
  return (
    <TopNav />
  )
}

ReactDOM.render(<Popup />, document.getElementById('root'));