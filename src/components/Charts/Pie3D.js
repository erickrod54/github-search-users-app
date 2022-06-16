import React from 'react';

import ReactFC from 'react-fusioncharts';

import FusionCharts from 'fusioncharts';

import Charts from 'fusioncharts/fusioncharts.charts';


import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
/**Github-search-users app version 11 - 'Pie3D' Chart
 * Component - Features: 
 * 
 *      --> Adding responsiveness to the chart. 
 * 
 * Notes: Just adding the 'relative' width, and targeting
 * the parent elements -code in the Wrapper- using 'div',
 * 'fusion-charts-container', and 'svg' with the grid
 * template the charts will become responsive.  
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
    width: '100%',
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