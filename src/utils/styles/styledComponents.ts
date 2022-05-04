import styled from 'styled-components';

export const FlexCenter = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  h3 {
    max-width: 850px;
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 2rem;
    }
  }
`;
