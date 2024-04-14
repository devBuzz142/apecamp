import Page from "./Page";

const ArduinoPage = () => {
  return (
    <Page>
      <h1>Arduino</h1>
      <p>아두이노를 활용한 블루투스 무선 개폐기</p>
      <video
        src="/src/assets/arduino/arduino01.mp4"
        loop
        autoPlay
        muted
        width={720}
      />
      <video
        src="/src/assets/arduino/arduino02.mp4"
        loop
        autoPlay
        muted
        width={360}
      />
    </Page>
  );
};

export default ArduinoPage;
