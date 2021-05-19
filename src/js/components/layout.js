import React from 'react';
import Header from './header';
import Nav from './nav';


const Layout = ({ children }) => {
    return (
        <div>            
            <Header />
            <div>
                <Nav />
                <div>
                    <main>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;