import styled from "@emotion/styled";

const AppSection = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url("/src/assets/apecamp.jpg");
  background-size: 1020px;
  background-position-x: -50%;
  background-position-y: -36px;

  padding-top: 160px;
  padding-bottom: 120px;
  padding-left: 120px;
  padding-right: 120px;

  overflow-y: scroll;
`;

const MainSection = styled.main`
  background-color: rgba(255, 255, 255);
  width: 100%;
  min-height: 360px;

  border-radius: 20px;
  border: 2px solid rgba(0, 0, 0, 0.1);

  padding-top: 60px;
  padding-bottom: 36px;
  padding-left: 48px;
  padding-right: 48px;
`;

function App() {
  return (
    <AppSection>
      <MainSection>
        <h1>학습하는 기계를 통해, 방황하는 인간을 탐구하는 정종관입니다.</h1>
        <h2>반갑습니다</h2>
        <div>hello</div>
        <video src="/src/assets/arduino01.mp4" loop autoPlay width={720} />
        <video src="/src/assets/arduino02.mp4" loop autoPlay width={360} />
      </MainSection>
    </AppSection>
  );
}

export default App;
