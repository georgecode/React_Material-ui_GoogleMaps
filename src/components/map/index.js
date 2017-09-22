import React from 'react';
import GoogleMapsLoader from 'google-maps';
import './map.css';

console.log("Hello")
console.log("Pleae fucking work")
GoogleMapsLoader.KEY = 'AIzaSyC0NyJIm9F7w1wCspVIFck3coBtBRq-fgk';

GoogleMapsLoader.onLoad(function(google) {
    console.log('I just loaded google maps api');
});


// GoogleMapsLoader.load(function(google) {
//     new google.maps.Map();
// });
      // function initMap() {
      //   var uluru = {lat: -25.363, lng: 131.044};
      //   var map = new google.maps.Map(document.getElementById('map'), {
      //     zoom: 4,
      //     center: uluru
      //   });
      //   var marker = new google.maps.Marker({
      //     position: uluru,
      //     map: map
      //   });
      // }






class Mapcontainer extends React.Component{

	constructor(props,context){
       super(props,context);
      

    }

	componentWillMount(){
		//Do this stuffbefore you render
		// let element4Map = this.refs.mapContainer;
		// GoogleMapsLoader.load(function(google) {
  //   		new google.maps.Map(element4Map);
		// });
	}



    // componentDidMount() {
    //     // Connect the initMap() function within this class to the global window context,
    //     // so Google Maps can invoke it
    //     window.initMap = this.initMap;
    //     // Asynchronously load the Google Maps script, passing in the callback reference
    //     loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyC0NyJIm9F7w1wCspVIFck3coBtBRq-fgk&callback=initMap')
    // }
    
    // initMap() {
    //     map = new google.maps.Map(this.refs.map.getDOMNode(), { ... });
    // },


    
   
    // initMap() {
    //     map = new google.maps.Map(this.refs.map.getDOMNode(), { ... });
    // },


	render(){
		return(
			<div id="mapContainer" ref="mapContainer">
			<h1 >Map component</h1>







			</div>

			)
	}
}

export default Mapcontainer;

// function loadJS(src) {
//     var ref = window.document.getElementsByTagName("script")[0];
//     var script = window.document.createElement("script");
//     script.src = src;
//     script.async = true;
//     ref.parentNode.insertBefore(script, ref);
// }


// const Navbar = () => (
// 	<div>
//       <AppBar
//       	title= "stuff"
//       	iconElementRight={<IconButton><NavigationClose /></IconButton>}
//       	iconElementLeft ={<Hamburger />}
//       	onLeftIconButtonTouchTap={alertHello}
//       />
      
//     </div>     
// );


//			<iframe width="600" height="450" frameborder="0" style="border:0"
// src="https://www.google.com/maps/embed/v1/view?center=0&zoom=2&key=AIzaSyC0NyJIm9F7w1wCspVIFck3coBtBRq-fgk" allowfullscreen></iframe>

//Google Maps Geolocation 

//AIzaSyC0NyJIm9F7w1wCspVIFck3coBtBRq-fgk

//https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY



    // <script>


    //   function initMap() {
    //     var uluru = {lat: -25.363, lng: 131.044};
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //       zoom: 4,
    //       center: uluru
    //     });
    //     var marker = new google.maps.Marker({
    //       position: uluru,
    //       map: map
    //     });
    //   }



    // </script>
    // <script async defer
    // src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
    // </script>






