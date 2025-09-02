import  { useState } from 'react'
import { Input } from './ui/input'
import {Button} from './ui/button'


interface Props{
    onAdd:(activity:string,hour:number)=>void
}

const TimeForm = ({onAdd}:Props) => {
    
    const [activity, setActivity] = useState("");
    const [hour, setHour] = useState("");

    const handleSubmit=()=>{
        if(!activity.trim() || !hour)
            alert("please enter valid activity and hour")
        else
           onAdd(activity,Number(hour))
            setActivity("")
            setHour("")
            
    }
  return (
    <div className='space-y-4'>
      <Input
        placeholder="activiti add here (e.g sleep)"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <Input
        placeholder="enter the hours (e.g 8)"
        value={hour}
        type='Number'
        onChange={(e) => setHour(e.target.value)}
      />
      <Button className='w-full' onClick={handleSubmit}>
        ADD ACTIVITY
      </Button>
    </div>
  );
}

export default TimeForm