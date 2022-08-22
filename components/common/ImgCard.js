import styled from 'styled-components';
export default function ImgCard({ imgUrl }) {
  const ImgCard = styled.div`
    max-width: 100%;
    border-radius: 12px;
    transition: transform 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    background-image: url(${({ background }) => background});
  `;

  return <ImgCard background={imgUrl} />;
}
