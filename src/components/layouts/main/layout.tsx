"use client"

import { Layout } from 'antd';
import Sidebar from './sidebar';


const { Content } = Layout;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className='h-[100vh]' >
      <Sidebar />
      <Layout>
        <Content style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;