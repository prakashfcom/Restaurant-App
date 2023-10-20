import React from 'react'
import { useState } from 'react'
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import Footer from '../layouts/Footer';

const Dashboard =() =>{

    return (
        <div className="container-scroller">
        <Header />
        <div className="container-fluid page-body-wrapper">
            <Sidebar />
            <div className="main-panel">
                  <div className="content-wrapper">
                        <h1>Dashboard</h1>
                    </div>
                    <Footer />
            </div>
        </div>
    </div>
    )
}

export default Dashboard;