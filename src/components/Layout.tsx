import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <main
                style={{
                    flex: 1,
                    padding: '2rem',
                    margin: '-15px',
                    maxWidth: '1600px'
                }}
            >
                {children}
            </main>
        </div>
    );
};

export default Layout;
