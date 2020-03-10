import React from 'react';
 
function Hulu(props) {
  return (
    <div className="App">
      <header>  
        <p>
          Movie: {props.data.Title}
          Season: {props.data.Season}
          Genre:{props.data.Genre}
          Rated: {props.data.Rating}
        </p>  
      </header>
    </div>
  );
}

export default Hulu;