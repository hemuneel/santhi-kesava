import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div >
      <switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shops' component={ShopPage}/>
      </switch>
    </div>
  );
}

export default App;
