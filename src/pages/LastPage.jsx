import styled from "@emotion/styled";
import Page, { PageLeftSection, PageRightSection } from "./Page";

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  // same as h1
  font-size: 2rem;
  font-weight: bold;

  display: flex;
`;

const BlueWrapper = styled.p`
  color: blue;
  margin-left: 10px;
  margin-right: 10px;
`;

const LastPage = () => {
  return (
    <Page>
      <PageLeftSection>
        <Header>
          적극적인 한 명의 <BlueWrapper>APE</BlueWrapper>가 되겠습니다.
        </Header>
        <br />
        <div>
          {"<"}Codeplay{">"} 외에 기술을 예술분야에 적용시켜 본 경험이 아직
          부족합니다. 이런 포트폴리오로 지원해도 괜찮을지, 혹시나 합격해도 다른
          참가자들에게 제가 도움이 될지 걱정이 많습니다.
        </div>
        <br />
        <div>
          부족한만큼, 더 적극적으로 참여하고, 더 열심히 공부하고, 더 열심히
          사람들을 만나고, 공유하고 싶습니다.
        </div>
        <br />
        <div>본 과정을 통해 많은 사람들을 나누고, 성장하고자 지원했습니다.</div>
      </PageLeftSection>
      <PageRightSection>
        <br />
        <br />
        <br />
        <br />
        <ImageWrapper>감사합니다.</ImageWrapper>
      </PageRightSection>
    </Page>
  );
};

export default LastPage;
