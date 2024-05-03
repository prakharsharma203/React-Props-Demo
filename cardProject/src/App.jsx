import {data} from "./data.js"
import { Card, } from "./components/card/card.jsx";
function App() {
 

  return (
    <>
      {data.map((detail)=>(
        <Card detail={detail}/>
      ))}
    </>
  )
}

export default App
