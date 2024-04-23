import { RenderMenu } from "./structure/Navigation/RenderNavigation/RenderNavigation"
import { RenderRoutes } from "./structure/Navigation/RenderNavigation/RenderNavigation"
import { RenderHeader } from "./structure/Header/Header"
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
       <BrowserRouter>
          <RenderHeader/>
          <RenderMenu />
          <RenderRoutes />
       </BrowserRouter>

    </>
  )
}

export default App
