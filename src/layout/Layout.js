import { Container } from './LayoutStyles'
import Footer from '../components/Footer/Footer'
import Head from 'next/head'
import Header from '../components/Header/Header'
import React from 'react'

export const Layout = ({ title = "Leonardo M. Arrieta - Fullstack web Developer", children }) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}
