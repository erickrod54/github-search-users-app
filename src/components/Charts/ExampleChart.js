import React from 'react';

import ReactFC from 'react-fusioncharts';

import FusionCharts from 'fusioncharts';

import Charts from 'fusioncharts/fusioncharts.charts';


import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
/**Github-search-users app version 5 - 'ExampleChart' js 
 * file - Features:
 * 
 *      --> Modifying 'chartData' and placing it on 
 *          the 'chartConfigs'
 * 
 * Notes: this data will become dinamyc on the next versions
 * 
 * */

/**here i modifify the data */
const chartData = [
  {
    "label": "HTML",
    "value": "13"
  },
  {
    "label": "CSS",
    "value": "25"
  },
  {
    "label": "javaScript",
    "value": "80"
  },
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
    /**here place 'chartData' */
    "data": chartData
  },
};

/**here i build the 'ChartComponent' */
const ChartComponent = () => {
  return <ReactFC {...chartConfigs} />
}

export default ChartComponent;