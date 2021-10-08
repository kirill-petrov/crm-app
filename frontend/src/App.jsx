import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import { useSelector } from 'react-redux';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Login from './components/index/Login.jsx';
import CreateWorkCenter from './components/admin/CreateWorkCenter.jsx';
import CreateUser from './components/admin/CreateUser.jsx';
import Logout from './components/index/Logout.jsx';
import CreateOrder from './components/manager/CreateOrder.jsx';
import CreateItem from './components/manager/CreateItem.jsx';
import OrdersListing from './components/user/OrdersListing.jsx';
// import EditItem from './components/manager/EditItem.jsx';
// import EditOrder from './components/manager/EditOrder.jsx';
import ListUsers from './components/admin/ListUsers.jsx';
import ListWorkCenters from './components/admin/ListWorkCenters.jsx';
import ListOrders from './components/manager/ListOrders.jsx';
import ListItems from './components/manager/ListItems.jsx';
import Header from './components/Header.jsx';

function App() {
  // const { jobtitle } = useSelector((state) => state);
  return (
    <div className='App'>
      <BrowserRouter>
        <Sidebar />
        <div id='content'>
          <Header />
          <div className='inner'>
            <Switch>
              <Route path='/' exact>
                <Login />
              </Route>
              <Route path='/logout' exact>
                <Logout />
              </Route>
              <Route path='/create-work-center' exact>
                <CreateWorkCenter />
              </Route>
              <Route path='/create-user' exact>
                <CreateUser />
              </Route>
              <Route path='/list-users' exact>
                <ListUsers />
              </Route>
              <Route path='/edit-work-center' exact>
                <ListWorkCenters />
              </Route>
              <Route path='/create-item' exact>
                <CreateItem />
              </Route>
              <Route path='/edit-item' exact>
                <ListItems />
              </Route>
              <Route path='/edit-order' exact>
                <ListOrders />
              </Route>
              <Route path='/create-order' exact>
                <CreateOrder />
              </Route>
              <Route path='/orders' exact>
                <OrdersListing />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
