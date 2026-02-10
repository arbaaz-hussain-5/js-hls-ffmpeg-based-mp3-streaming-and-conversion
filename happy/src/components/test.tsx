// Parent Component (App.tsx)
import React from 'react';
import { Layout } from './Layout';
import { Nav } from './Nav';

const App = () => {
    return (
        <Layout
            headerContent={<h1>Welcome to My Site</h1>} // Pass the JSX element
            navContent={<Nav />} // Pass another component as JSX
        >
            <div>Hello World!</div> {/* This goes to children prop */}
        </Layout>
    );
};

// Child Component (Layout.tsx)
interface LayoutProps {
    headerContent: React.ReactNode;
    navContent: React.ReactNode;
    children: React.ReactNode; // Commonly used for wrapping content
}

const Layout = ({ headerContent, navContent, children }: LayoutProps) => {
    return (
        <div>
            <header>{headerContent}</header>
            <nav>{navContent}</nav>
            <main>{children}</main>
        </div>
    );
};
