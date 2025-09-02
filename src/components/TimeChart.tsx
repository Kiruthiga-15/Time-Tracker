import {Pie} from "react-chartjs-2";
import {Chart as ChartJs, 
            ArcElement,
            Tooltip ,
            Legend
        } from "chart.js"

ChartJs.register(ArcElement,Tooltip,Legend)
 interface Props{
    data:{activity:string,hour:Number}[]
 }
const TimeChart = ({data}:Props) => {
  const ChartData={
    labels : data.map((d)=> d.activity),
    datasets:[
        {
            label:"hours",
            data: data.map((d)=>d.hour),
            backgroundColor:[
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#34D399',
                '#A78BFA'
            ],
            borderWidth:1,
        }
    ]
  }
  return (
   
    <Pie data ={ChartData}/>
  )
}

export default TimeChart