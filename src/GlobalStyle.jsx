import { Global, css } from "@emotion/react";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        * {
          position: relative;

          margin: 0;
          padding: 0;
          border: none;

          /* font-size: 28px; */
          font-family: "Noto Sans KR", sans-serif;

          ::-webkit-scrollbar {
            /* display: none; */
          }
        }

        *,
        ::after,
        ::before {
          box-sizing: border-box;
        }

        // 사실상 <html>
        :root {
          -webkit-tap-highlight-color: transparent;
          -webkit-text-size-adjust: 100%;
          text-size-adjust: 100%;
          cursor: default;
          line-height: 1.5;
          overflow-wrap: break-word;
          -moz-tab-size: 4;
          tab-size: 4;
        }

        html,
        body {
          width: 100%;
          height: 100%;
        }
      `}
    />
  );
};

export default GlobalStyle;
