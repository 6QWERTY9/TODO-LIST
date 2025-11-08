
import { CreateTask } from "@features/createTask"


import { Header } from "@shared/components/header"

import { BrowserRouter } from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
      <Header/>
      

      <CreateTask open={true}/>
    </BrowserRouter>
  )
}

export default App
