import React from 'react';

import ReactFC from 'react-fusioncharts';

import FusionCharts from 'fusioncharts';

import Charts from 'fusioncharts/fusioncharts.charts';


import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
/**Github-search-users app version 6 - 'ExampleChart' js 
 * file - Features: 
 * 
 *      --> Separating 'chartData' from the 'ChartComponent'
 *          to make it dynamicly.
 * 
 * Notes: the data will be moved to 'Repos' Component and
 * drilled back to the 'ChartComponent'.
 * 
 * There's two important reasons on moving the data, first
 * the data will be moved to 'Repos' because there will be
 * filled directly with the 'Repos' data that i previously
 * tested.
 * 
 * And the second reason is that when i drilled the data
 * as a prop i can renamed so can become dynamic and i can
 * change the data as i need it.
 * 
 * Once drilled i have to move 'chartConfigs' inside of
 * 'ChartComponent' because 'chartsData' is drilled as
 * 'data' trought 'ExampleComponent'
 * */

/**this is the root Component that comes with
 * the chart resources*/
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


/**here i build the 'ChartComponent' */
const ChartComponent = ({ data }) => {

  /**this is the 'chartConfig' here i can modify
   * directly the 'chart' and 'chart' type*/
  const chartConfigs = {
    type: 'column2d',
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