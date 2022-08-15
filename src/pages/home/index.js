import React from 'react';
import Overview from '../../components/overview';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
  return (
    <div className='main'>
      <Sidebar />
      <div className='container'>
        <Overview />
      </div>
    </div>
  );
}

export default Home;