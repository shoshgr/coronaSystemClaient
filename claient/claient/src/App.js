import './App.css';
import { BrowserRouter as Router,Navigate, Route, Routes } from 'react-router-dom';
import Home from './componnets/home';
import MemberList from './componnets/memberList';
import Layout from './componnets/layout';
import Member from './componnets/member'
import AddMember from './componnets/addMember'
function App() {
  return (
    <Router>
        
            
       <Routes>
       {/* <Route exact path='/home' element={<Layout />}>
              <Route index element={<Home />} />
              <Route  path="memberList" element={<MemberList />} />
            {/* </Route> */}
       {/* <Route path="/home" element={<Home />}>
            <Route path="memberList" element={<MemberList />} /> */}
            {/* <Route path="/:status" element={<AddMember member={null}/>} />*/}
           
{/* 
          </Route>  */}
          <Route path="/home" element={<Home /> } /> 
          <Route path="/addMember" element={<AddMember />}/>
          <Route path="/" element={<Home /> } /> 
          <Route path="member/:name" element={<Member />} /> 
          <Route  path="/memberList" element={<MemberList />} />
          {/* <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
    
  );
}

export default App;
