import React, { useRef, useState, useEffect } from 'react';
import Slider from "react-slick";
import TitleBox from '../../../components/titleBox';
import bgImg from '../../../assets/images/testimonial.jpg';

const dataArr = [
  {
    detail: "This is not the first time that we are dealing with your company, and there is no way we are switching to a different freight delivery service. Thank you for the amazing features and benefits that make us a really happy client. Good luck in the future!"
  },
  {
    detail: "This is not the first time that we are dealing with your company, and there is no way we are switching to a different freight delivery service. Thank you for the amazing features and benefits that make us a really happy client. Good luck in the future!"
  },
  {
    detail: "This is not the first time that we are dealing with your company, and there is no way we are switching to a different freight delivery service. Thank you for the amazing features and benefits that make us a really happy client. Good luck in the future!"
  },
];

const dataImgArr = [
  {
    img: require('../../../assets/images/testimonial1.jpg'),
  },
  {
    img: require('../../../assets/images/testimonial2.jpg'),
  },
  {
    img: require('../../../assets/images/testimonial3.jpg'),
  },
];
const dataImgTxtArr = [
  {
    name: "Peter Jones",
    title: "Project Manager",
  },
  {
    name: "James Morris",
    title: "SENIOR MANAGER",
  },
  {
    name: "Molly Cooper",
    title: "Product Manager",
  },
];

const Testimonial = () => {
  const textSlider = useRef(null);
  const imgSlider = useRef(null);
  const [sliderReady, setSliderReady] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (textSlider.current && imgSlider.current) {
      setSliderReady(true);
    }
  }, []);

  const settingsText = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: sliderReady ? imgSlider.current : null,
  };

  const settingsImg = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: sliderReady ? textSlider.current : null,
    afterChange: index => setCurrentSlide(index),
  };
  const settingsImgText = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: sliderReady ? textSlider.current : null,
    afterChange: index => setCurrentSlide(index),
  };

  const handleImageClick = index => {
    setCurrentSlide(index);
    textSlider.current.slickGoTo(index); // Navigate to the corresponding slide in the first slider
  };

  return (
    <div className="py-[100px] bg-cover bg-no-repeat relative z-10 before:absolute before:w-full before:h-full before:bg-[#333537] before:opacity-80 before:-z-10 before:left-0 before:top-0 before:right-0 before:bottom-0" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="container">
        <TitleBox className="text-center" title1Css="text-white" title2Css="primaryClr" title1="100% APPROVED" title2="BY CUSTOMERS" borderWrap="justify-center" borderCss="bg-white" />
        <Slider className='max-w-[804px] w-full mx-auto cursor-grab' ref={textSlider} {...settingsText}>
          {dataArr.map((data, index) => (
            <div key={index}>
              <div className='text-[30px] primaryClr text-center mb-4'><i className="fas fa-quote-left"></i></div>
              <p className='text-center text-white'>{data.detail}</p>
            </div>
          ))}
        </Slider>
        <Slider className='max-w-[185px] w-full mx-auto mt-10' ref={imgSlider} {...settingsImg}>
          {dataImgArr.map((dataImg, index) => (
            <div key={index} className='h-[35px] flex_align flex-col'>
              <div className={`cursor-pointer transition-all duration-300 ${index === currentSlide ? 'w-[35px]' : 'w-[21px]'}`} onClick={() => handleImageClick(index)}>
                <img src={dataImg.img} alt={dataImg.name} className='rounded-full w-full' />
              </div>
            </div>
          ))}
        </Slider>
        <Slider className='max-w-[185px] w-full mx-auto mt-4' ref={imgSlider} {...settingsImgText}>
          {dataImgTxtArr.map((dataImg, index) => (
            <div key={index}>
              <p className={`text-white text-center text-[17.5px]`}>{dataImg.name}</p>
              <p className={`text-white text-center text-[12.25px] uppercase mt-2`}>{dataImg.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
