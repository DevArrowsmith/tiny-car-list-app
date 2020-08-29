import styled from 'styled-components';
import frameYellow from '../../assets/images/FrameYellow.png';

const FeaturedCar = styled.div`
  height: 79.5vw;
  width: 100vw;
  max-height: calc(0.795 * 360px);
  max-width: 360px;
  background-image: url(${frameYellow});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 360px) {
    min-width: 360px;
  }

  @media (min-width: 460px) {
    height: calc(0.795 * 360px);
    min-height: calc(0.795 * 360px);
    width: 360px;
    min-width: 360px;
  }

  @media (min-width: 768px) {
    height: calc(0.795 * 480px);
    min-height: calc(0.795 * 480px);
    width: 480px;
    min-width: 480px;
  }

  img {
    width: 95%;
  }
`;

export default FeaturedCar;
