# ⏱️ Time Tracker (React + TypeScript + Vite)

A **Time Tracker Web App** built with **React, TypeScript, Vite, TailwindCSS, shadcn/ui, and Chart.js**.  
This project demonstrates how to **track tasks, visualize progress with charts, and manage time efficiently**.

---

## 📖 Table of Contents
- [🚀 Features](#-features)
- [📥 Installation & Setup](#-installation--setup)
- [🎨 UI Components Setup](#-ui-components-setup-shadcnui)
- [📊 Charts Integration](#-charts-integration-chartjs--react-chartjs-2)
- [📂 Project Structure](#-project-structure)
- [📸 Screenshots](#-screenshots)
- [🛠️ Tech Stack](#️-tech-stack)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## 🚀 Features
- ⚡ **Vite + React + TypeScript** setup with HMR  
- 🎨 **TailwindCSS** for styling  
- 🧩 **shadcn/ui** for modern UI components  
- 📊 **Chart.js + react-chartjs-2** for time tracking visualization  
- 📱 **Responsive design** with clean layout  
- ✅ Easy to extend and customize  

---

## 📥 Installation & Setup

### 1. Create Project
```bash
npm create vite@latest time-tracker
cd time-tracker
Choose React + TypeScript template.

### 2. Install Tailwind CSS
bash
Copy code
npm install tailwindcss @tailwindcss/vite
Replace the content of src/index.css with:

css
Copy code
@import "tailwindcss";
### 3. Configure tsconfig
Update tsconfig.json and tsconfig.app.json:

json
Copy code
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
### 4. Update vite.config.ts
ts
Copy code
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
🎨 UI Components Setup (shadcn/ui)
1. Initialize shadcn/ui
bash
Copy code
npx shadcn@latest init
Choose Neutral as base color.

### 2. Add Components
```bash
Copy code
npx shadcn@latest add button
Usage in components:

import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <Button>Click me</Button>
    </div>
  )
}
📊 Charts Integration (Chart.js + react-chartjs-2)
### 1. Install Packages
 ```bash
Copy code
npm i chart.js@4.4.3 react-chartjs-2
### 2. TimeChart Component (src/components/TimeChart.tsx)
tsx
Copy code
import { Pie } from "react-chartjs-2"
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js"

ChartJs.register(ArcElement, Tooltip, Legend)

interface Props {
  data: { activity: string, hour: number }[]
}

const TimeChart = ({ data }: Props) => {
  const ChartData = {
    labels: data.map(d => d.activity),
    datasets: [
      {
        label: "Hours",
        data: data.map(d => d.hour),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#34D399',
          '#A78BFA'
        ],
        borderWidth: 1,
      }
    ]
  }

  return <Pie data={ChartData} />
}

export default TimeChart
### 3. TimeForm Component (src/components/TimeForm.tsx)
tsx
Copy code
import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

interface Props {
  onAdd: (activity: string, hour: number) => void
}

const TimeForm = ({ onAdd }: Props) => {
  const [activity, setActivity] = useState("")
  const [hour, setHour] = useState("")

  const handleSubmit = () => {
    if (!activity.trim() || !hour) {
      alert("Please enter valid activity and hour")
    } else {
      onAdd(activity, Number(hour))
      setActivity("")
      setHour("")
    }
  }

  return (
    <div className='space-y-4'>
      <Input
        placeholder="Activity add here (e.g. sleep)"
        value={activity}
        onChange={e => setActivity(e.target.value)}
      />
      <Input
        placeholder="Enter hours (e.g. 8)"
        value={hour}
        type='number'
        onChange={e => setHour(e.target.value)}
      />
      <Button className='w-full' onClick={handleSubmit}>
        ADD ACTIVITY
      </Button>
    </div>
  )
}

export default TimeForm
### 4. Home / Dashboard Page (src/pages/home.tsx)
tsx
Copy code
import TimeChart from '@/components/TimeChart'
import TimeForm from '@/components/TimeForm'
import { useState } from 'react'

const Home = () => {
  const [data, setData] = useState<{ activity: string; hour: number }[]>([])

  const handleAdd = (activity: string, hour: number) => {
    setData(prev => [...prev, { activity, hour }])
  }

  return (
    <div className='max-w-md mx-auto p-6 mt-10 bg-white rounded shadow space-y-6'>
      <h1 className='text-2xl font-bold'>Time Tracker</h1>
      <TimeForm onAdd={handleAdd} />
      <TimeChart data={data} />
    </div>
  )
}

### export default Home
📂 Project Structure
pgsql
Copy code
time-tracker/
├── src/
│   ├── components/
│   │   ├── ui/ (shadcn components)
│   │   ├── TimeChart.tsx
│   │   └── TimeForm.tsx
│   ├── pages/
│   │   └── home.tsx
│   ├── App.tsx
│   └── index.css
├── tsconfig.json
├── vite.config.ts
└── package.json
### 📸 Screenshots
![Time Tracker Screenshot](timetracker.png)


🛠️ Tech Stack
React + TypeScript

Vite

TailwindCSS

shadcn/ui

Chart.js + react-chartjs-2