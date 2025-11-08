import { Header } from "@shared/components/header"
import { TaskSection } from "@widgets/taskSection"

import { BrowserRouter } from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
    <Header/>
      <TaskSection/>
    </BrowserRouter>
  )
}

export default App
