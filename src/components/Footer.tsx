import React from "react"

function Footer(){
    const curentYear = new Date().getFullYear()
    return(
      
      <footer>
        <p>copyright BarShirom {curentYear}</p>
       
      </footer>
    )
  }
  
  export default Footer