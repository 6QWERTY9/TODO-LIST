import { TaskCard } from "@entities/TaskCard"
import { Header } from "@shared/components/header"

import { BrowserRouter } from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
      <Header/>
      

      <TaskCard 
        title="Submit Documents"
        shortDesc='Make sure to submit all the necessary docum.....'
        id="title"
        status='Выполнено'
        priority="Срочный"
        createDate="08/11/2025"
      />
    </BrowserRouter>
  )
}

export default App
