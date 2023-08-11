import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
`;

export const InviteBox = styled.p`
  font-size: 2em;
  font-weight: 700;
  color: #0057b8;
  text-shadow: 3px 3px 3px rgba(168, 168, 168, 0.8);
`;

export const ContentBox = styled.div`
  position: relative;

  h2 {
    color: #fff;
    font-size: 4em;
    text-transform: uppercase;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  h2:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px #0057b8;
  }

  h2:nth-child(2) {
    color: #0057b8;
    animation: animate 4s ease-in-out infinite;
  }

  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }

    50% {
      clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }
`;
