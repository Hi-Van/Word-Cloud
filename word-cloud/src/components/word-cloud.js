import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "./word-cloud.css";
import { Button, Box } from '@material-ui/core';
import { useState } from 'react';

function WordCloud() {

    const [query, setQuery] = useState('');
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setQuery(document.getElementById('inputText').value);
    }

    am4core.useTheme(am4themes_animated);
    var chart = am4core.create(
        'chartdiv',
        am4plugins_wordCloud.WordCloud
    );

    var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

    series.text = query;

    return (
        <div className="content-wrapper">
            <div className="title"><span role="img" aria-label="cloud" style={ {fontSize: '3rem' , textAlign: 'center', margin: '.8rem'} }>💭</span> <h1>CLOUDY <a href="https://material.io/resources/color/#!/?view.left=0&view.right=0&secondary.color=F44336&primary.color=3F51B5" target="_blank" rel="noopener noreferrer">By Van S.</a></h1> </div>

            <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" style={{ marginTop: '10rem' }}>
                <form className="search" onSubmit={handleSubmit}> <input type="text" placeholder="Copy Paste Text.." id="inputText" className="input" /> </form>
                <Button onClick={handleSubmit} variant="contained" size="large" style={{ margin: '20px' }} color='primary' disableElevation>Go!</Button>
            </Box>

            <div className="chartdiv" id="chartdiv" randomness='0.9' />
        </div>
    );
}

export default WordCloud;
