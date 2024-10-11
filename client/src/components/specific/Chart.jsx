import React from 'react'
import {Line,Doughnut} from "react-chartjs-2"
import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Tooltip,
    plugins,
  } from "chart.js";
import { purple, purpleLight,orange } from '../../constants/color';
import { getLast7Days } from '../../lib/features';


ChartJS.register(CategoryScale,
    Tooltip,
    LinearScale,
    LineElement,
    PointElement,
    Filler,
    ArcElement,
    Legend
);

const  labels=getLast7Days();

const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

const LineChart = ({value=[]}) => {

    const data={
        labels,
        datasets:[
            {
                data:value,
        label:"Revenue",
        fill:true,
        backgroundColor:purpleLight,
        borderColor:purple,
            },
           
        ]
    }

  return  <Line data={data} options={lineChartOptions}/>
};

const doughnutChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false
        },
    },
    cutout:100,
};



const DoughnutChart = ({value=[],labels=[]}) => {
    const data={
        labels,
        datasets:[
            {
                data:value,
        label:"Total Chat Vs Group Chats",
        
        backgroundColor:[purpleLight,orange],
        borderColor:[purple,orange],
        hoverBackgroundColor:[purple,orange],
        offset:20,
            },
        ]
    }
    return <Doughnut style={{
        zIndex:10
    }} data={data} options={doughnutChartOptions}/>
  };
  


export {LineChart,DoughnutChart};