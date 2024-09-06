// ===================
// Mapa utilizando Leaflet
// ===================
var map = L.map('map').setView([16.8531, -99.8237], 13); // Centro en Acapulco

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Resaltando Acapulco con un polígono (ejemplo)
var acapulcoPolygon = L.polygon([
    [16.845, -99.863],
    [16.870, -99.829],
    [16.832, -99.790],
    [16.805, -99.824]
]).addTo(map);

// Marcadores en lugares característicos
var playa = L.marker([16.8512, -99.9092]).addTo(map)
    .bindPopup('Playa de Acapulco');
var antro = L.marker([16.8556, -99.8757]).addTo(map)
    .bindPopup('Antro en Acapulco');

// ===================
// Gráfica de Columnas utilizando Highcharts
// ===================
Highcharts.chart('container-column', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column Chart Example'
    },
    xAxis: {
        categories: [
            'Under 1000 ADM',
            '1,000 to 2,499 ADM',
            '2,500 to 4,999 ADM',
            '5,000 to 9,999 ADM'
        ]
    },
    yAxis: {
        title: {
            text: 'Values'
        }
    },
    series: [{
        name: 'ADM',
        data: [{
            y: 159,
            color: '#7cb5ec'
        }, {
            y: 267,
            color: '#7cb5ec'
        }, {
            y: 117,
            color: '#FF0000' // Color diferente
        }, {
            y: 47,
            color: '#7cb5ec'
        }]
    }],
    tooltip: {
        backgroundColor: '#bada55', // Color personalizado para el tooltip
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' + this.y;
        }
    }
});

// ===================
// Gráfica de Pastel utilizando Highcharts
// ===================
Highcharts.chart('container-pie', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Pie Chart Example'
    },
    series: [{
        name: 'Values',
        data: [{
            name: 'Ada Ex Vill SD, Hardin',
            y: 61.41,
            color: '#f2b0a5'
        }, {
            name: 'Adena Local SD, Ross',
            y: 11.84,
            color: '#d57056'
        }, {
            name: 'Akron City SD, Summit',
            y: 10.85,
            color: '#b33a3a'
        }, {
            name: 'Alexander Local SD, Athens',
            y: 4.67,
            color: '#751a2c'
        }]
    }],
    tooltip: {
        backgroundColor: '#bada55', // Color personalizado para el tooltip
        formatter: function () {
            return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
        }
    }
});

// ===================
// Gráfica Polar o de Radar utilizando Highcharts
// ===================
Highcharts.chart('container-radar', {
    chart: {
        polar: true,
        type: 'line'
    },
    title: {
        text: 'Radar Chart Example'
    },
    pane: {
        size: '80%'
    },
    xAxis: {
        categories: ['Attendance', 'Chronic Absenteeeis', 'Total per pupil on instruction', 'Perfomance Index'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },
    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 1 // Fijando el valor máximo a 1
    },
    series: [{
        name: 'Values',
        data: [0.5500000000000019, 0.4432234432234432, 0.6457032124621673, 1],
        pointPlacement: 'on'
    }],
    tooltip: {
        backgroundColor: '#bada55', // Color personalizado para el tooltip
        formatter: function () {
            return '<b>' + this.x + '</b>: ' + this.y;
        }
    }
});
