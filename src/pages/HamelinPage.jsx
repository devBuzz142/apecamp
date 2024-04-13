import styled from "@emotion/styled";
import Page from "./Page";

const XScrollBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

const HamelinPage = () => {
  return (
    <Page>
      <h1>Hamelin</h1>
      <div>
        하멜린을 하면서 생성 이미지 활용하였습니다. 이를 통해 --할 수
        있었습니다.
      </div>
      <XScrollBox>
        <img src="/src/assets/hamelin/hamelin01.png" width={720} />
        <img src="/src/assets/hamelin/hamelin01.png" width={720} />
        <img src="/src/assets/hamelin/hamelin01.png" width={720} />
        <img src="/src/assets/hamelin/hamelin01.png" width={720} />
        <img src="/src/assets/hamelin/hamelin01.png" width={720} />
        <img src="/src/assets/hamelin/hamelin01.png" width={720} />
        <img src="/src/assets/hamelin/hamelin01.png" width={720} />
        <img src="/src/assets/hamelin/hamelin01.png" width={720} />
        <img src="/src/assets/hamelin/hamelin01.png" width={720} />
        <img src="/src/assets/hamelin/hamelin01.png" width={720} />
        <img src="/src/assets/hamelin/hamelin01.png" width={720} />
        <img src="/src/assets/hamelin/hamelin01.png" width={720} />
        <img src="/src/assets/hamelin/hamelin01.png" width={720} />
        <img src="/src/assets/hamelin/hamelin01.png" width={720} />
        <img src="/src/assets/hamelin/hamelin01.png" width={720} />
      </XScrollBox>
    </Page>
  );
};

export default HamelinPage;
