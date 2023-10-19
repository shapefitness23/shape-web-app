import React from 'react';
import { Flex } from '../../ui-library/flex';
import { Sidebar } from '../sidebar';
import { Layout } from 'antd';
import { ContentLayout } from './styles';
import { AuthorizedRoutes } from '../routes';

export const Home = () => {

  const renderLayout = () => {
    return <AuthorizedRoutes />;
  };


  return (
    <ContentLayout>
      <Sidebar />
      <Layout>
        {renderLayout()}
      </Layout>
    </ContentLayout>
  )
}