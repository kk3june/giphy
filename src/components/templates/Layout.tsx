import React from 'react';
import { LayoutProps } from '../../types/layout';
import Navbar from '../modules/Navbar';
import Floating from '../modules/Floating';

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Floating />
    </div>
  );
};

export default Layout;
