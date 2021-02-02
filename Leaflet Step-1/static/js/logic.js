var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Perform a GET request to the query URL
d3.json(url, function (data) {
    console.log(data.features);

});
function getColor(d) {
    console.log(d);

    return (d >= -10 && d < 10) ? '#a3f621' :
        (d >= 10 && d < 30) ? '#dcf425' :
            (d >= 30 && d < 50) ? '#f6db25' :
                (d >= 50 && d < 70) ? '#fdb72a' :
                    (d >= 70 && d < 90) ? '#fca35d' :
                        '#ff5f65';
}


function createFeatures(earthquakes) {
    console.log(earthquakes);

    // Define a function we want to run once for each feature in the features array
    // Give each feature a popup describing the place and time of the earthquake
    function onEachFeature(feature, layer) {
        layer.bindPopup("<h3>" + 'Place:' + ' ' + feature.properties.place +
            "</h3><hr><p>" + new Date(feature.properties.time) + "</p>" +
            "</h3><hr><p>" + 'Magnitude:' + ' ' + feature.properties.mag + "</p>");
    }









