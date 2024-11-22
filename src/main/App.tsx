
import HouseList from '../house/HouseList'
import './App.css'
import Header from './Header'

const App = () =>
 {
  
  return (
    <div className='container'>
      <Header subtitle="Providing Houses all over the world"></Header>
      <HouseList  />
    </div>
  )
}

export default App
