import TimeChart from '@/components/TimeChart';
import TimeForm from '@/components/TimeForm';
import { use, useState } from 'react'

const home = () => {

  const [data,setData]=useState<{activity:string; hour : number}[]>([]);

  const handleAdd=(activity :string,hour:number)=>{
    console.log(activity,hour)
    setData((prev)=>[...prev, {activity,hour}])
    console.log(data)
    console.log(setData)
  }
  return (
   <div className='max-w-md mx-auto p-6 mt-10 bg-white rounded shadow space-y-6'>
    <h1 className='texxt-2xl font-bold'> Time Tracker </h1>
    <TimeForm onAdd={handleAdd}/>
    <TimeChart data={data}/>
   </div>
  )
}

export default home