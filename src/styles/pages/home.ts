import styled from "styled-components";

export const Conteiner = styled.main`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const Offers = styled.section``;

export const Brands = styled.section``;

export const Products = styled.section`
  width: 100%;
  padding: 1em 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  justify-items: center;
`;
