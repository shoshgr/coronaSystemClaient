import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
   

    return (
        <>
            
            <Link to={"/memberList"}>member list  |  </Link>
             <Link to={"/addMember"}>add member |  </Link> 
            {/* <Outlet /> */}
        </>
    );
}

export default Home;