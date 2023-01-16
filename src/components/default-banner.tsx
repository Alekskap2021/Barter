import React from "react";
import styled from "styled-components";
import Image, { ImageProps } from "next/image";

const Banner = styled.div`
  height: 320px;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`;



export const DefaultBanner = ({ img }: any) => {
  return (
    <Banner>
      <Image  alt="" height={320} width={1200}  loading="lazy"   src={img} />
    </Banner>
  );
};
