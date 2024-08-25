import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from './Home'
import Form from './Form'

const App=()=>(
  <Router>
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/form" Component={Form}/>

    </Routes>
  </Router>
 )

export default App;