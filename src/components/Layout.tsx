import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div
            style={{
                display: 'flex',
                minHeight: '100vh',
                backgroundColor: 'var(--background)',
                color: 'var(--foreground)'
            }}
        >
            <Sidebar />
            <main
                style={{
                    flex: 1,
                    padding: '2rem',
                    maxWidth: '1600px',
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)'
                }}
            >
                {children}
            </main>
        </div>
    );
};

export default Layout;
