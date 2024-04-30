var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_linea4Lineas_1 = new ol.format.GeoJSON();
var features_linea4Lineas_1 = format_linea4Lineas_1.readFeatures(json_linea4Lineas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linea4Lineas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linea4Lineas_1.addFeatures(features_linea4Lineas_1);
var lyr_linea4Lineas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_linea4Lineas_1, 
                style: style_linea4Lineas_1,
                popuplayertitle: "linea4Lineas",
                interactive: true,
                title: '<img src="styles/legend/linea4Lineas_1.png" /> linea4Lineas'
            });
var format_EstacionesCoordenadas_2 = new ol.format.GeoJSON();
var features_EstacionesCoordenadas_2 = format_EstacionesCoordenadas_2.readFeatures(json_EstacionesCoordenadas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstacionesCoordenadas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacionesCoordenadas_2.addFeatures(features_EstacionesCoordenadas_2);
var lyr_EstacionesCoordenadas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstacionesCoordenadas_2, 
                style: style_EstacionesCoordenadas_2,
                popuplayertitle: "EstacionesCoordenadas",
                interactive: true,
                title: '<img src="styles/legend/EstacionesCoordenadas_2.png" /> EstacionesCoordenadas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_linea4Lineas_1.setVisible(true);lyr_EstacionesCoordenadas_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_linea4Lineas_1,lyr_EstacionesCoordenadas_2];
lyr_linea4Lineas_1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_EstacionesCoordenadas_2.set('fieldAliases', {'Stations': 'Stations', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_linea4Lineas_1.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_EstacionesCoordenadas_2.set('fieldImages', {'Stations': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_linea4Lineas_1.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'other_tags': 'no label', });
lyr_EstacionesCoordenadas_2.set('fieldLabels', {'Stations': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_EstacionesCoordenadas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});