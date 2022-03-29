// import React from 'react'
// import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from '@react-google-maps/api';
// import { useRef, useState } from 'react'
// import { Container, Form, Button } from 'react-bootstrap';
// import { FaLocationArrow} from 'react-icons/fa'




// const center = {
//   lat: 40.758896,
//   lng: -73.985130
// };

// function GoogleMapComponent() {
  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: "",
  //   libraries: ['places']
  // })

  // const [map, setMap] = useState(/** @type google.maps.Map */ (null))

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  // return (
    // <Container> 
    //   <GoogleMap
    //     mapContainerStyle={{width: '100%', height: '500px'}}
    //     center={center}
    //     zoom={15}
    //     // onLoad={onLoad}
    //     onUnmount={onUnmount}
    //     options = {{
    //       zoomControl: false,
    //       streetViewControl: false,
    //       mapTypeControl: false,
    //       fullscreenControl: false, 
    //     }}
    //     onLoad={map => setMap(map)}
    //   >
    //     <Marker position={center}/>
    //     <Button> 
    //         aria-label='center back'
    //         icon={<FaLocationArrow />}
    //         isRound
    //         onClick={() => {
    //           map.panTo(center)
    //           map.setZoom(15)
    //         }}

    //   </Button>
    //   </GoogleMap>

     

    //   </Container>
//   )
// }

// export default GoogleMapComponent;