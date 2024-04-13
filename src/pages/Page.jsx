import styled from "@emotion/styled";

const PageContainer = styled.div`
  width: 100%;
  min-height: 120px;

  border-bottom: 2px solid rgba(0, 0, 0, 0.1);

  padding-top: 24px;
  padding-bottom: 24px;

  display: flex;
  flex-direction: column;
`;

const Page = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};

export default Page;
