import React from 'react';

import ReactFC from 'react-fusioncharts';

import FusionCharts from 'fusioncharts';

import Charts from 'fusioncharts/fusioncharts.charts';


import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
/**Github-search-users app version 14 - 'Column3D' Chart
 * Component - Features: 
 * 
 *      --> Copying the exact same code from 'Pie3D'. 
 *    
 *      --> Changing the type prop to 'column3D'.  
 * 
 *      --> Adding props 'yAxisName':'Stars', 
 *         'xAxisName':'Repos',
 *         'xAxisNameFontSize':'16px',
 *         'yAxisNameFontSize':'16px',
 * 
 * Notes: All these new props added can be watched on
 * the documentation in detail
 * */

/**this is the root Component that comes with
 * the chart resources*/
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);


/**here i build the 'ChartComponent' */
const ChartComponent = ({ data }) => {

  /**this is the 'chartConfig' here i can modify
   * directly the 'chart' and 'chart' type*/
  const chartConfigs = {
    type: 'column3d',
    /**here i modidy the previous width */
    width: '100%',
    height: 400,
    dataFormat: 'json',
    dataSource: {
      "chart": {
        /**this will be the title */
        'caption':'Most Popular Languages',
        'yAxisName':'Stars',
        'xAxisName':'Repos',
        'xAxisNameFontSize':'16px',
        'yAxisNameFontSize':'16px',
      },
      /**here place 'chartData' */
      data
    },
  };
  return <ReactFC {...chartConfigs} />
}

export default ChartComponent;