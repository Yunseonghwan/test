import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ({ description, state, uri, thumbnail, market }) => {
  return (
    <Container>
      <h1>{market}</h1>
      <div>
        <span>{description}</span>
      </div>
      <div>
        <span>{state}</span>
      </div>
      <div>
        <span>{uri}</span>
      </div>
      <div>
        <img src={`${thumbnail}`} />
      </div>
    </Container>
  );
};
