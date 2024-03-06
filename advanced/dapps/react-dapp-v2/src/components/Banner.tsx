import * as React from "react";
import styled from "styled-components";

const SBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SBanner = styled.div`
  width: 275px;
  height: 45px;
  background: url(https://avatars.githubusercontent.com/u/5237680) no-repeat;
  background-size: 50% auto;
  background-position: center;
  margin-top: 2rem;
`;

const Banner = () => (
  <SBannerWrapper>
    <SBanner />
  </SBannerWrapper>
);

export default Banner;
