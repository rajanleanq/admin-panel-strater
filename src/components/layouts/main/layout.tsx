"use client"

import { Avatar, Layout } from 'antd';
import Sidebar from './sidebar';
import { AppProgressBar } from 'next-nprogress-bar';
import { Header } from 'antd/es/layout/layout';


const { Content } = Layout;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className='h-[100vh]' >
      <Header className='flex items-center p-0 justify-between' style={{ padding: " 0 24px !important" }}>
        <p className='text-white text-xl'>Tax Depreciation Calculator</p>
        <Avatar className='align-middle'  style={{ backgroundColor: '#87d068' }}  size="large">
          Admin
        </Avatar>
      </Header>
      <Layout>
        <Sidebar />
        <Content style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}>
          {children}
          <AppProgressBar
            height="2px"
            color="red"
            options={{ showSpinner: false }}
            shallowRouting
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;