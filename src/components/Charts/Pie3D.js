import React from 'react';

import ReactFC from 'react-fusioncharts';

import FusionCharts from 'fusioncharts';

import Charts from 'fusioncharts/fusioncharts.charts';


import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
/**Github-search-users app version 9 - 'Pie3D' Chart
 * Component - Features: 
 * 
 *      --> Copying the exact same code as i have
 *          on 'ExampleChart'.
 * 
 *      --> Customizing 'chart' object 'props'. 
 * 
 * Notes: The exact same code of 'ExampleChart' 
 * Component has been coppied here to make easier
 * to modify the Chart, and as the 'data' is already
 * dynamic i can modify the data form 'Repo' 
 * Component
 * 
 * The chart object props 'pie3d' i can find it
 * out in the documentation of the chart.
 * */

/**this is the root Component that comes with
 * the chart resources*/
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


/**here i build the 'ChartComponent' */
const ChartComponent = ({ data }) => {

  /**this is the 'chartConfig' here i can modify
   * directly the 'chart' and 'chart' type*/
  const chartConfigs = {
    type: 'pie3d',
    /**here i modidy the previous width */
    width: 400,
    height: 400,
    dataFormat: 'json',
    dataSource: {
      "chart": {
        /**this will be the title */
        'caption':'Languages',
        /**this will be the theme */
        "theme": "fusion",
        /**as the chart calculate the portions
         * of data in percentage i can do them
         * exact with this line*/
        'decimals':'0',
        /**this is the size of the chart */
        'pieRadius':'45%',
        /**there is another prop related with
         * the color pallete in order if i have
         * more data it won't ran out of colors
         * to be labeled*/
      },
      /**here place 'chartData' */
      data
    },
  };
  return <ReactFC {...chartConfigs} />
}

export default ChartComponent;