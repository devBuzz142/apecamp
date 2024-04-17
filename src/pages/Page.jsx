import styled from "@emotion/styled";

const PageContainer = styled.div`
  width: 100%;
  min-height: 120px;

  border-bottom: 2px solid rgba(0, 0, 0, 0.1);

  padding-top: 24px;
  padding-bottom: 24px;

  display: flex;
  flex-wrap: wrap;
`;

export const PageLeftSection = styled.div`
  width: 50%;
  max-width: 840px;
  min-width: 320px;
  height: 100%;

  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
`;

export const PageRightSection = styled.div`
  width: 50%;
  max-width: 50%;
  max-width: 840px;
  min-width: 320px;
  height: 100%;

  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
`;

const Page = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};

export default Page;
