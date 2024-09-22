import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MockApiContext } from "../../context/MockApiContext";
import { Card } from "../../customComponetns/Card";
import { MidText, ParentContainer } from "../../utils/modules/modules";
import { BigText } from "./landingStyles";
import "./swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { plainAPi } from "../auth/axios/axios";

export const BrowseProperties = ({ scroll }) => {
  const BrowseProperties = useRef();

  const { mockHotel, farm } = useContext(MockApiContext);
  const [properties, setProperties] = useState([])
  const [swiperRef, setSwiperRef] = useState(null);



  useEffect(() => {
    (async () => {
      try {
        const { data: { data } } = await plainAPi.get('/properties')
        console.log(data)
        setProperties(data)
      } catch (error) {
      }
    })()

  }, [])
  return (
    <ParentContainer ref={BrowseProperties}>
      {/* <MidText>Trending Properties 🔥🔥🔥</MidText>
      <BrowsePropsMain>
        <SwiSlider
          centeredSlides={false}
          spaceBetween={10}
          breakpoints={{
            1800: { slidesPerView: 4 },
            1080: { slidesPerView: 3 },
            768: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
          }}
          pagination={false}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          loop={true}
          autoplay={true}
        >
          {properties &&
            properties?.map((hotel) => {
              return (
                <Card
                  det={hotel}
                  images={hotel.images}
                  id={hotel.id}
                  image={hotel.images[1]}
                  name={hotel?.gender}
                  locationText={hotel.location}
                  review={hotel.number_of_beds}
                  price={hotel?.price}
                />
              );
            })}
        </SwiSlider>
      </BrowsePropsMain> */}
    </ParentContainer>
  );
};

export const BrowseProps = styled.div`
  display: flex;
  gap: ${(p) => p.theme.space[2]};
  scroll-behavior: smooth;
  overflow: scroll;
  justify-content: center;

  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const BrowsePropsMain = styled.div`
  display: flex;
  gap: ${(p) => p.theme.space[2]};
  scroll-behavior: smooth;
  overflow: scroll;
  justify-content: center;

  align-items: center;
  /* @media (max-width: 768px) {
    flex-direction: column; 
  } */
`;

const SwiSlider = styled(Swiper)`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;
const CardSlider = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const next = styled(nextEl);
