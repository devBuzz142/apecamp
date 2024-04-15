import styled from "@emotion/styled";
import Page, { PageLeftSection, PageRightSection } from "./Page";

const XScrollBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

const hamelinImages = Array.from(
  { length: 32 },
  (_, i) => `/assets/hamelin/hamelin-` + String(i + 1).padStart(2, "0") + `.jpg`
);

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;

  border: 4px solid rgba(0, 0, 0, 0.8);
  box-shadow: 24;
`;

const HamelinPage = () => {
  return (
    <Page>
      <PageLeftSection>
        <h1>Hamelin</h1>
        <div>
          하멜린을 하면서 생성 이미지 활용하였습니다. 이를 통해 --할 수
          있었습니다.
        </div>
      </PageLeftSection>
      <PageRightSection>
        <XScrollBox>
          {hamelinImages.map((src, i) => (
            <ImageWrapper key={i}>
              <img key={i} src={src} width={660} />
            </ImageWrapper>
          ))}
        </XScrollBox>
      </PageRightSection>
    </Page>
  );
};

export default HamelinPage;
