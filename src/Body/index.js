
import "./index.css"

const Body = () =>{

    return(
       
<div>

<p><b>Wearther App</b></p>
    <div className="narvbar-text">
        <h1>Rayn</h1>
    <input type="text" placeholder="search location "/>
    </div>

<div className="body">
 <img src="/images/body-image.jpeg" alt=""/>
 <p>13<br/>Telluride,CO,USA</p>
   <p>7:50pm<br/>Sunset Time,Monday</p>
</div>

<div className="body-text">
    <p>Humidty<br/>39%</p>
    <p>Sunset<br/>7:50pm</p>
</div>
<div className="text">
    <p>UV index<br/>0 of 10</p>
    <p>Sunrise<br/>6:35pm</p>
</div>
</div>
 )
        

}
export default Body;