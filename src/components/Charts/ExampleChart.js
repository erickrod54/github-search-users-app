import React from 'react';

import ReactFC from 'react-fusioncharts';

import FusionCharts from 'fusioncharts';

import Charts from 'fusioncharts/fusioncharts.charts';


import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
/**Github-search-users app version 4 - 'ExampleChart' js 
 * file - Features:
 * 
 *      --> Building a 'ChartComponent' to replace the 
 *          class Component from 'fusioncharts' library.
 * 
 *      --> Building an array for the API data, for
 *          later modification.
 * 
 * Notes: In this first approach to start get famimiliar with 
 * the chart i checked fusioncharts > integration > React
 * 
 * ---reference >
 * 
 *  https://www.fusioncharts.com/react-charts?framework=react
 * 
 * In next version the 'chartData' will become dynamic by
 * separating it and drilling it back to 'ChartComponent'
 * in this version i'm making the array 'chartData'.
 * */

/**here is the array build to modifify the data */
const chartData = [
    {
      "label": "Venezuela",
      "value": "290"
    },
    {
      "label": "Saudi",
      "value": "260"
    },
    {
      "label": "Canada",
      "value": "180"
    },
    {
      "label": "Iran",
      "value": "140"
    },
    {
      "label": "Russia",
      "value": "115"
    },
    {
      "label": "UAE",
      "value": "100"
    },
    {
      "label": "US",
      "value": "30"
    },
    {
      "label": "China",
      "value": "30"
    }
]

/**this is the root Component that comes with
 * the chart resources*/
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

/**this is the 'chartConfig' here i can modify
 * directly the 'chart' and 'chart' type*/
const chartConfigs = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: {
    "chart": {
      "caption": "Countries With Most Oil Reserves [2017-18]",
      "subCaption": "In MMbbl = One Million barrels",
      "xAxisName": "Country",
      "yAxisName": "Reserves (MMbbl)",
      "numberSuffix": "K",
      "theme": "fusion"
    },
    /**here i'll place 'chartData' */
    "data": [
      {
        "label": "Venezuela",
        "value": "290"
      },
      {
        "label": "Saudi",
        "value": "260"
      },
      {
        "label": "Canada",
        "value": "180"
      },
      {
        "label": "Iran",
        "value": "140"
      },
      {
        "label": "Russia",
        "value": "115"
      },
      {
        "label": "UAE",
        "value": "100"
      },
      {
        "label": "US",
        "value": "30"
      },
      {
        "label": "China",
        "value": "30"
      }
    ]
  },
};

/**here i build the 'ChartComponent' */
const ChartComponent = () => {
  return <ReactFC {...chartConfigs} />
}

export default ChartComponent;