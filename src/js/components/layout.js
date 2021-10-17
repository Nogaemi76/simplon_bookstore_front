import React from 'react';
import Header from './header';
import Nav from './nav';


const Layout = ({ children }) => {
    return (
        <div>            
            <Header />
            <div style={{ display: 'flex', flexGrow: '1' }}>
                <Nav />
                <div>
                    <main style={{ backgroundColor: 'teal', width: '100%' }}>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;