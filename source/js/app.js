
  $('#nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollThreshold: 0.5
  });


// JavaScript
window.sr = ScrollReveal(); 

// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px' 
// });


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {


    if (this.hash !== "") {

      event.preventDefault();

      // Store hash
      var hash = this.hash;


      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){


        window.location.hash = hash;
      });
    }
  });
});

$(document).ready(function() {

  $(window).scroll(function() {

    if($(this).scrollTop() > 500) {
        $('nav').addClass('solid');
    } else {
        $('nav').removeClass('solid');
    }
  });
});

// pencil to top
$(document).ready(function() {

  $(window).scroll(function() {

    if($(this).scrollTop() > 500) {
        $('.toTop').addClass('solid');
    } else {
        $('.toTop').removeClass('solid');
    }
  });
});


// Initialize and add the map
function initMap() {
    // The location of MOA
    var MOA = {lat: 32.0775578, lng: -81.1014353};
    var Arnold = {lat: 32.0590905, lng: -81.1012037};
    var center = {lat: 32.068657, lng: -81.098467};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 14, 
            center: center,
            disableDefaultUI: true,
            styles: [
                {
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#844c49"
                      }
                    ]
                  },
                  {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                      {
                        "color": "#f0cdc9"
                      },
                      {
                        "visibility": "on"
                      },
                      {
                        "weight": 2
                      }
                    ]
                  },
                  {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#e0e4f4"
                      }
                    ]
                  },
                  {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#b5bad0"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.business",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#b0c5f4"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#fffafa"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [
                      {
                        "color": "#a1a2ad"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#97a3be"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#fff1de"
                      }
                    ]
                  },
                  {
                    "featureType": "transit",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#e5e5e5"
                      }
                    ]
                  },
                  {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#8995c7"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                      {
                        "color": "#e6e6e6"
                      }
                    ]
                  }
            ]
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: MOA, map: map});
    var marker = new google.maps.Marker({position: Arnold, map: map});
}