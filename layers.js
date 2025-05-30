var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_ServiceArea_1 = new ol.format.GeoJSON();
var features_ServiceArea_1 = format_ServiceArea_1.readFeatures(json_ServiceArea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceArea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea_1.addFeatures(features_ServiceArea_1);
var lyr_ServiceArea_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea_1, 
                style: style_ServiceArea_1,
                popuplayertitle: 'Service Area',
                interactive: true,
    title: 'Service Area<br />\
    <img src="styles/legend/ServiceArea_1_0.png" /> 500.0000000<br />\
    <img src="styles/legend/ServiceArea_1_1.png" /> 1000.0000000<br />\
    <img src="styles/legend/ServiceArea_1_2.png" /> 1500.0000000<br />\
    <img src="styles/legend/ServiceArea_1_3.png" /> 2000.0000000<br />\
    <img src="styles/legend/ServiceArea_1_4.png" /> 2500.0000000<br />\
    <img src="styles/legend/ServiceArea_1_5.png" /> 3000.0000000<br />\
    <img src="styles/legend/ServiceArea_1_6.png" /> <br />' });
var format_BusStop_2 = new ol.format.GeoJSON();
var features_BusStop_2 = format_BusStop_2.readFeatures(json_BusStop_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusStop_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusStop_2.addFeatures(features_BusStop_2);
var lyr_BusStop_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BusStop_2, 
                style: style_BusStop_2,
                popuplayertitle: 'Bus Stop',
                interactive: true,
    title: 'Bus Stop<br />\
    <img src="styles/legend/BusStop_2_0.png" /> Halte PENS<br />\
    <img src="styles/legend/BusStop_2_1.png" /> SB Galaxy 2<br />\
    <img src="styles/legend/BusStop_2_2.png" /> SB ITS<br />\
    <img src="styles/legend/BusStop_2_3.png" /> SB Kedung Baruk<br />\
    <img src="styles/legend/BusStop_2_4.png" /> SB KONI MERR<br />\
    <img src="styles/legend/BusStop_2_5.png" /> SB RS Haji 1<br />\
    <img src="styles/legend/BusStop_2_6.png" /> SB Semolowaru 2<br />\
    <img src="styles/legend/BusStop_2_7.png" /> SB Sentra UKM MERR<br />\
    <img src="styles/legend/BusStop_2_8.png" /> SB SMPN 19<br />\
    <img src="styles/legend/BusStop_2_9.png" /> SB UNAIR 1<br />\
    <img src="styles/legend/BusStop_2_10.png" /> <br />' });
var format_Roads_3 = new ol.format.GeoJSON();
var features_Roads_3 = format_Roads_3.readFeatures(json_Roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_3.addFeatures(features_Roads_3);
var lyr_Roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_3, 
                style: style_Roads_3,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_3.png" /> Roads'
            });
var format_Busstop_4 = new ol.format.GeoJSON();
var features_Busstop_4 = format_Busstop_4.readFeatures(json_Busstop_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Busstop_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Busstop_4.addFeatures(features_Busstop_4);
var lyr_Busstop_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Busstop_4, 
                style: style_Busstop_4,
                popuplayertitle: 'Bus stop',
                interactive: true,
    title: 'Bus stop<br />\
    <img src="styles/legend/Busstop_4_0.png" /> Halte PENS<br />\
    <img src="styles/legend/Busstop_4_1.png" /> SB Galaxy 2<br />\
    <img src="styles/legend/Busstop_4_2.png" /> SB ITS<br />\
    <img src="styles/legend/Busstop_4_3.png" /> SB Kedung Baruk<br />\
    <img src="styles/legend/Busstop_4_4.png" /> SB KONI MERR<br />\
    <img src="styles/legend/Busstop_4_5.png" /> SB RS Haji 1<br />\
    <img src="styles/legend/Busstop_4_6.png" /> SB Semolowaru 2<br />\
    <img src="styles/legend/Busstop_4_7.png" /> SB Sentra UKM MERR<br />\
    <img src="styles/legend/Busstop_4_8.png" /> SB SMPN 19<br />\
    <img src="styles/legend/Busstop_4_9.png" /> SB UNAIR 1<br />\
    <img src="styles/legend/Busstop_4_10.png" /> <br />' });

lyr_Positron_0.setVisible(true);lyr_ServiceArea_1.setVisible(true);lyr_BusStop_2.setVisible(true);lyr_Roads_3.setVisible(true);lyr_Busstop_4.setVisible(true);
var layersList = [lyr_Positron_0,lyr_ServiceArea_1,lyr_BusStop_2,lyr_Roads_3,lyr_Busstop_4];
lyr_ServiceArea_1.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', });
lyr_BusStop_2.set('fieldAliases', {'name': 'name', 'highway': 'highway', });
lyr_Roads_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', });
lyr_Busstop_4.set('fieldAliases', {'name': 'name', 'highway': 'highway', 'Foto': 'Foto', });
lyr_ServiceArea_1.set('fieldImages', {'id': 'TextEdit', 'cost_level': 'TextEdit', });
lyr_BusStop_2.set('fieldImages', {'name': 'TextEdit', 'highway': 'TextEdit', });
lyr_Roads_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name': '', });
lyr_Busstop_4.set('fieldImages', {'name': 'TextEdit', 'highway': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_ServiceArea_1.set('fieldLabels', {'id': 'hidden field', 'cost_level': 'inline label - always visible', });
lyr_BusStop_2.set('fieldLabels', {'name': 'header label - visible with data', 'highway': 'no label', });
lyr_Roads_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'inline label - always visible', 'name': 'hidden field', });
lyr_Busstop_4.set('fieldLabels', {'name': 'inline label - always visible', 'highway': 'inline label - always visible', 'Foto': 'no label', });
lyr_Busstop_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});