import React from 'react';
import Navbar from '../Navbar';
import Player from '../Player';
import { Container } from './components';
import Head from 'next/head';
import { MainLayoutProps } from './type';

const MainLayout = ({ children, title, description }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "Music portal"}</title>
        <meta name="dedcription" content={description || "The bet music platform"}></meta>
        <meta name="robots" content='index, follow' />
        <meta name='keywords' content="musik, artist, listen, Eminem" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Navbar />
      <Container>
        {children}
      </Container>
      <Player />
    </>
  );
};

export default MainLayout;