import React from 'react';

import ReactFC from 'react-fusioncharts';

import FusionCharts from 'fusioncharts';

import Charts from 'fusioncharts/fusioncharts.charts';


import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
/**Github-search-users app version 7 - 'ExampleChart' js 
 * file - Features: 
 * 
 *      --> Changing chart 'type' from 'column2d'
 *        'bar3d'   
 * 
 * Notes: Change the 'chart' types depends on how
 * similar are the objects to succed with the 
 * configuration, exploring the graphs on:
 * 
 *  -->https://www.fusioncharts.com/charts/column-bar-charts/
 * 
 * i can find similar objects that switch perfect
 * as 'simple Column', 'Simple Bar', other objects
 * can imply to do some more job to change the 'type'
 * or even change the object
 * */

/**this is the root Component that comes with
 * the chart resources*/
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


/**here i build the 'ChartComponent' */
const ChartComponent = ({ data }) => {

  /**this is the 'chartConfig' here i can modify
   * directly the 'chart' and 'chart' type*/
  const chartConfigs = {
    type: 'bar3d',
    /**here i modidy the previous width */
    width: 400,
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
      data
    },
  };
  return <ReactFC {...chartConfigs} />
}

export default ChartComponent;