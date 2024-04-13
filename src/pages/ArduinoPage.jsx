import Page from "./Page";

const ArduinoPage = () => {
  return (
    <Page>
      <h1>Arduino</h1>
      <video
        src="/src/assets/arduino/arduino01.mp4"
        loop
        autoPlay
        width={720}
      />
      <video
        src="/src/assets/arduino/arduino02.mp4"
        loop
        autoPlay
        width={360}
      />
    </Page>
  );
};

export default ArduinoPage;
