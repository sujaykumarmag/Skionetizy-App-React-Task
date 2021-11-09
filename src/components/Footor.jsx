import React from "react";

function Footor(){
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Sujay</p>
    </footer>
  );
}


export default Footor;
