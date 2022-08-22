import styled from 'styled-components';
export default function Card({ title, imgUrl }) {
  const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: 210px 210px 80px;
    grid-template-areas: 'image' 'text' 'stats';
    border-radius: 18px;
    background: #000;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
    text-align: center;
  `;
  const CardImage = styled.div`
    max-width: 3rem;
    border-radius: 12px;
    transition: transform 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  `;
  const CardTextTitle = styled.h2`
    font-size: 2rem;
    color: pink;
  `;

  return (
    <CardWrapper>
      <CardTextTitle>{title}</CardTextTitle>
      <CardImage>
        <img src={imgUrl} />
      </CardImage>
    </CardWrapper>
  );
}
