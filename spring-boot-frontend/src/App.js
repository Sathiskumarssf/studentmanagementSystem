 
import './App.css';
import ListEmployeeComponets from './components/employee/ListEmployeeComponets';
import Headernavbar from './components/employee/heardercomponets';
import Footercomponents from './components/employee/footercomponent';
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';
import Addemployeecomponete from './components/employee/Addemployeecomponete';
import EditemployeeService from './components/employee/Editemaplyee';
import StudentRegister from './components/user/register/Register';
import Studentlogin from './components/user/login/Login';
import Studentprofile from './components/user/profile/Profile';
import StudentHome from './components/user/home/Home';



function App() {
  return (
    <div className='main-conatiner bg-light'>
      <Router>
         

        <div  className='container'>
           <Routes>
            {/* <Route path='/' Component={ListEmployeeComponets}></Route> */}
            <Route path='/' Component={StudentRegister}></Route>
            <Route path='/studentlogin' Component={Studentlogin}></Route>
            <Route path='/studenthome' Component={StudentHome}></Route>
            <Route path='/studentprofile' Component={Studentprofile}></Route>
            <Route path='/employees' Component={ListEmployeeComponets}></Route>
            <Route path='/add-employee' Component={Addemployeecomponete}></Route>
            <Route path='/edit-employee' Component={EditemployeeService}></Route>
           </Routes>

        </div>
         
      </Router>
    </div>
  );
}

export default App;
