import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { Layout } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'

export const Route = createRootRoute({
  component: () => (
    <Layout>
      <Header>
        <Link to="/">
          Home
        </Link>{' '}
        <Link to="/about">
          About
        </Link>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer></Footer>
    </Layout>
  ),
})