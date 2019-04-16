import React from "react";
import ReactDOM from "react-dom";



const Index = () => {
  return (
    <div>
      <h1 style={{
          fontSize:"3rem",
          margin:"auto",
          fontWeight:"300",
          padding:"0 20px 0 20px",
          textTransform:"uppercase",
          textAlign:"center"
        }}>MirelesCloud React-Webpack Basic Template</h1>
      <p style={{
          paddingTop:"50px",
          fontSize:"1.2rem",
          margin:"auto",
          textAlign:"left"
        }}>This is just a basic set up.  I have used this previously to set up my AWS portfolio and <a href="https://gemstateclassof68.com" target="_blank">Gem State Class of 1968</a>.
        Got to make sure to keep babel packages congruent with each other.  Othwerwise it'll get a little squirly.
      </p>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
