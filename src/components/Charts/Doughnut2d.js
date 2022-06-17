import React from 'react';

import ReactFC from 'react-fusioncharts';

import FusionCharts from 'fusioncharts';

import Charts from 'fusioncharts/fusioncharts.charts';

/**switching theme - i have to switched also on the import-*/
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
/**Github-search-users app version 12 - 'Doughnut2d' Chart
 * Component - Features: 
 * 
 *      --> Changing 'caption' prop to 'stars Per 
 *          Language' 
 * 
 *      --> Adding props 'doughnutRadius', 
 *        'showPercentValues', and new 'theme' value
 * 
 * Notes: Just modifying the type prop to 'doughnut2d' 
 * */

/**this is the root Component that comes with
 * the chart resources*/
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


/**here i build the 'ChartComponent' */
const ChartComponent = ({ data }) => {

  /**this is the 'chartConfig' here i can modify
   * directly the 'chart' and 'chart' type*/
  const chartConfigs = {
    type: 'doughnut2d',
    /**here i modidy the previous width */
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: {
      "chart": {
        /**this will be the title */
        'caption':'Stars Per Language',
        'decimals':'0',
        /**this is the size of the chart 
         * -the name changes -reference to 
         * documentation- */
        'doughnutRadius':'45%',
        /**to show exact values */
        'showPercentValues': 0,
        /**switching theme*/
        'theme':'candy'
      },
      /**here place 'chartData' */
      data
    },
  };
  return <ReactFC {...chartConfigs} />
}

export default ChartComponent;