/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Instagram_stories from './Instagram-stories';

const InstagramStories = () => {
  return (
    <>
      <Instagram_stories userImg={'/img/ian-dooley.jpg'} userName="Ian Doo..." />
      <Instagram_stories userImg={'/img/bebida.jpg'} userName="Cervez..." />
      <Instagram_stories userImg={'/img/Bitcoin.png'} userName="Satoshi..." />
      <Instagram_stories userImg={'/img/joseph-gonzalez.jpg'} userName="Joseph..." />
      <Instagram_stories userImg={'/img/rafaella-mendes.jpg'} userName="Rafaella..." />
      <Instagram_stories userImg={'/img/michael-dam.jpg'} userName="Michael..." />
      <Instagram_stories userImg={'/img/barra.jpg'} userName="Angel Coste" />
    </>
  );
};

export default InstagramStories;