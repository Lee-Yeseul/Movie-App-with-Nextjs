import styled from 'styled-components';
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4fr 1fr;
  grid-template-areas: 'image' 'text' 'stats';
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 4px 4px 12px;
  text-align: center;
`;

const CardImg = styled.div`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;
const CardTextTitle = styled.h2`
  font-size: 1.5rem;
  color: tomato;
`;
export default function Card({ title, imgUrl }) {
  return (
    <CardWrapper>
      <CardTextTitle>{title}</CardTextTitle>
      <CardImg background={imgUrl}></CardImg>
    </CardWrapper>
  );
}
