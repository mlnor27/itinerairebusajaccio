var lieu = [];  //contiendra la latitude/longitide de la position de départ et de destination

function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {         //instancie la google map
        center: {lat: 41.9257502, lng: 8.7399893},  //centrée sur Ajaccio
        zoom: 15

    });

    var depart = document.getElementById('depart');
    var arrivee = document.getElementById('arrivee');

    var options = {
        //componentRestrictions: {country: 'fr'} //Restriction sur la france, mais ne marche pas sur les searchbox....
        bounds: map.getBounds()
    };

    var searchBoxDepart = new google.maps.places.SearchBox(depart, options);   // -->  intialise les input text en seachbox, permettant l'autocomplétion
    var searchBoxArrivee = new google.maps.places.SearchBox(arrivee, options); //  ↗


    map.addListener('bounds_changed', function() {         // Listener sur l'input text pour la position de départ
        searchBoxDepart.setBounds(map.getBounds());
    });

    map.addListener('bounds_changed', function() {         // Listener sur l'input text pour la position de arrivée
        searchBoxArrivee.setBounds(map.getBounds());
    });



    //_________________Place le marqueur sur la carte pour le lieu de départ______________

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBoxDepart.addListener('places_changed', function() {
        var places = searchBoxDepart.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            lieu['long1'] = place.geometry.location.lng();
            lieu['lat1'] = place.geometry.location.lat();

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);



        //_______________Affiche la trajectoire en bus____________________
        if (lieu["lat1"] != undefined && lieu["lat2"] != undefined && lieu["long1"] != undefined && lieu["long2"] != undefined){

            var depart = {lat: lieu['lat1'], lng: lieu['long1']};
            var arrivee = {lat: lieu['lat2'], lng: lieu['long2']};

            var directionsDisplay = new google.maps.DirectionsRenderer({
                map: map
            });

            // Set destination, origin and travel mode.
            var request = {
                destination: arrivee,
                origin: depart,
                travelMode: google.maps.TravelMode.TRANSIT,
                transitOptions: {
                    //departureTime: new Date(1337675679473),          // Foutre les critères de date et heure
                    modes: [google.maps.TransitMode.BUS],
                    routingPreference: google.maps.TransitRoutePreference.FEWER_TRANSFERS
                }
            };

            // Pass the directions request to the directions service.
            var directionsService = new google.maps.DirectionsService();
            directionsService.route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    // Display the route on the map.
                    directionsDisplay.setDirections(response);
                }
            });
        }
    });




































    //_________________Place le marqueur sur la carte pour le lieu d'arrivée______________

    var Amarkers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBoxArrivee.addListener('places_changed', function() {
        var places = searchBoxArrivee.getPlaces();

        //console.log(searchBoxArrivee.getPlaces())

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        Amarkers.forEach(function(marker) {
            marker.setMap(null);
        });
        Amarkers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            Amarkers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            lieu['long2'] = place.geometry.location.lng();
            lieu['lat2'] = place.geometry.location.lat();

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);


        //console.log(lieu);
        //console.log(lieu.length);

        //_______________Affiche la trajectoire en bus____________________
        if (lieu["lat1"] != undefined && lieu["lat2"] != undefined &&lieu["long1"] != undefined && lieu["long2"] != undefined){

            var depart = {lat: lieu['lat1'], lng: lieu['long2']};
            var arrivee = {lat: lieu['lat2'], lng: lieu['long2']};

            var directionsDisplay = new google.maps.DirectionsRenderer({
                map: map
            });

            // Set destination, origin and travel mode.
            var request = {
                destination: arrivee,
                origin: depart,
                travelMode: google.maps.TravelMode.TRANSIT
            };

            // Pass the directions request to the directions service.
            var directionsService = new google.maps.DirectionsService();
            directionsService.route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    // Display the route on the map.
                    directionsDisplay.setDirections(response);
                }
            });
        }
    });

}