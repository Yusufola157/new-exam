
import './App.css'
import { element } from './routes/MainRoutes'
import { RouterProvider } from 'react-router-dom'

function App() {


  return (
     <div>
      <RouterProvider router={element} />
     </div>
  )
}

export default App
