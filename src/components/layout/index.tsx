import React from 'react'
import Nav from './nav'
import Sidebar from './sidebar'

const Layout = ({ children }: any) => {
    return (
        <>
            <div className='m-0 overflow-hidden d-flex flex-column' style={{height:'100vh'}}>
                <Nav />
                <div className='row overflow-scroll'  style={{flex:'1 1 auto'}}>
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 bg-light overflow-auto" style={{overflowY:'auto'}}>
                            {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout 