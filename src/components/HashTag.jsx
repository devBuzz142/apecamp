import styled from "@emotion/styled";

const HashTagWrapper = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2f80ed;
`;

const HashTag = ({ children }) => {
  return <HashTagWrapper>{children}</HashTagWrapper>;
};

export default HashTag;
