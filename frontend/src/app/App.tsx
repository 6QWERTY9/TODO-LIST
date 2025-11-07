import { Header } from "@shared/components/header"

import { SideBarNav } from "@widgets/SideBar/ui/SideBar"
import { BrowserRouter } from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
      <Header/>
      <SideBarNav/>
    </BrowserRouter>
  )
}

export default App
