import {Outlet} from 'react-router-dom';
import Header from './Header';
import React from 'react';

const MainLayout=()=>{
    return(
        <>
           <div className ='site'>
                <Header/>
                <div className='main'>                 
                    <Outlet/>                                 
                </div>
            </div>
        </>
    )
}

export default MainLayout;