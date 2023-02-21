import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MockApiContext } from "../../context/MockApiContext";
import { Card } from "../../customComponetns/Card";
import { MidText, ParentContainer } from "../../utils/modules/modules";
import { BigText } from "./landingStyles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export const BrowseProperties = ({ scroll }) => {
  const BrowseProperties = useRef();

  const { mockHotel, farm } = useContext(MockApiContext);

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <ParentContainer ref={BrowseProperties}>
      <MidText>Trending Properties 🔥🔥🔥</MidText>
      <BrowseProps>
        <SwiSlider
          onSwiper={setSwiperRef}
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          loop={true}
          autoplay={true}
        >
          {mockHotel &&
            mockHotel.map((hotel) => {
              return (
                <CardSlider>
                  <Card
                    image={hotel.max_1440_photo_url}
                    name={hotel.hotel_name}
                    locationText={hotel.address}
                    review={hotel.review_score}
                    price="300"
                  />
                </CardSlider>
              );
            })}
        </SwiSlider>
      </BrowseProps>
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
`;

const SwiSlider = styled(Swiper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardSlider = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
