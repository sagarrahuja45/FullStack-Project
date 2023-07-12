import React from 'react'
import {useNavigate} from 'react-router-dom';
import './dashboard.css';

 const Dashboard = () => {

    const navigate = useNavigate();
    const handleCreate = () =>{
        navigate('/create-post')

    }
  return (
    <>
    <section className='wrapper-dashboard'>
        <div className='container-dashboard'>
            <div className='header-dashboard'>
                <h1>DASHBOARD</h1>
            </div>
            <div className='main-dashboard'>
                <button className='create-post-button' onClick={handleCreate}>Create New Post</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default Dashboard
