
import './App.css';
import AppRoutes from './main/AppRoutes';
import NavBar from './components/NavBar'
import "bootswatch/dist/vapor/bootstrap.css"

function App() {
  return (
    <div className="App">
      <NavBar/>

      
      <AppRoutes/>

      
    </div>
  );
}

export default App;
