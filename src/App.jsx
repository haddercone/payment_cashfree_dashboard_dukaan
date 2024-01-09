import DashBoard from "./components/DashBoard"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <main className="flex flex-row ">
      <Sidebar/>
      <DashBoard/>
    </main>
  )
}

export default App
