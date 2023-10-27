import { useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Instagram_stories from './Instagram-stories';

export const Stories = () => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  return (
    <>
      <div id="row" ref={sliderRef}>
        <MdChevronLeft onClick={slideLeft} className="SliderLeft" size={40} />
        <Instagram_stories userImg='src/img/ian-dooley.jpg' userName='ian_dooley'/>
        <Instagram_stories userImg='src/img/bebida.jpg' userName='cerveza_abi'/>
        <Instagram_stories userImg='src/img/Bitcoin.png' userName='satoshi_Nak'/>
        <Instagram_stories userImg='src/img/joseph-gonzalez.jpg' userName='joseph_gon'/>
        <Instagram_stories userImg='src/img/rafaella-mendes.jpg' userName='rafaellamen'/>
        <Instagram_stories userImg='src/img/barra.jpg' userName='angelcoste5'/>
      </div>
      <MdChevronRight onClick={slideRight} className="SliderRight" size={40} />

    </>
  )
}

export default Stories;