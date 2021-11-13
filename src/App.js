import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';

import AuthProvider from './Pages/Firebase/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import Details from './Pages/Details/Details';
import Load from './Pages/Load';
import NotFound from './Pages/NotFound/NotFound';
import Products from './Pages/Products/Products';
import Form from './Pages/Form/Form';
import Confirm from './Pages/Form/Confirm';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>

          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/details'>
              <Details></Details>
            </PrivateRoute>
            <Route path='/load'>
              <Load></Load>
            </Route>
            <Route exact path='/form'>
              <Form></Form>
            </Route>
            <Route path='/form/confirm'>
              <Confirm></Confirm>
            </Route>

            <Route path='/products'>
              <Products></Products>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
