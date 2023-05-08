import {Outlet} from 'react-router-dom';
import Header from './Header';
import React from 'react';

const MainLayout=()=>{
    return(
        <>
           <div className ='site'>
            <div className='main'>
                <div>Header</div>
                 <Outlet/>
                
               
            </div>

           </div>
        </>
    )
}

export default MainLayout;