import styled from "@emotion/styled";
import Page, { PageLeftSection, PageRightSection } from "./Page";
import { useState } from "react";
import { Pagination, Stack } from "@mui/material";
import HashTag from "../components/HashTag";

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

  max-width: 640px;
`;

const PaginationButtons = ({ page = 1, setPage }) => {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination count={32} page={page} onChange={handleChange} />
    </Stack>
  );
};

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const HamelinPage = () => {
  const [currentImage, setCurrentImage] = useState(1);

  return (
    <Page>
      <PageLeftSection>
        <h1>Hamelin</h1>
        <HashTag>#하멜린 #연극 #생성이미지 #인공지능이미지 #프롬프팅</HashTag>
        <br />
        <div>
          <span style={{ color: "blue" }}>
            인공지능은 작품의 추상적 개념어를 어떻게 이해하고 표현할까?
          </span>
          라는 질문에서 시작했습니다.
        </div>
        <div>
          이미지 생성형 인공지능인 DALL-E를 연극에 활용해보기로 하였습니다.
        </div>
        <br />
        <div>
          창작자들과 극에서 주요하게 사용되는 개념어를 추출하였습니다.
          탁상작업의 과정에서 자주 사용되는 단어나, 디자이너들이 작업을 함에
          있어 핵심으로 여긴 개념어를 수합하였습니다.
        </div>
        <div>
          이를 통해 얻은 [‘추상’, ‘격리’, ‘거리두기’, ‘아동’, ‘성당’, ‘언론’,
          ‘흑백’] 등의 단어를 조합하여 프롬프팅한 이미지를 극 중에서 무대
          스크린에 몽타주 기법으로 활용하였습니다.
        </div>
        <br />
        <div>본 과정을 통해 인공지능의 기술적 도입에 관심을 갖게 됐습니다.</div>
        <div>
          이에 지난 1년간, 인공지능 교육 과정을 수료하고, 프로그램을 개발하면서,
          인공지능의 이론적 원리와 기술적 활용을 배웠습니다.
        </div>
        <br />
        <div>
          그 결과, 다음의{" "}
          <b>
            {"<"}Codeplay{">"}
          </b>
          를 개발하게 되었습니다.
        </div>
      </PageLeftSection>
      <PageRightSection>
        <ImageWrapper>
          <img
            src={hamelinImages[currentImage - 1]}
            alt="hamelin"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </ImageWrapper>
        <br />
        <PaginationWrapper>
          <PaginationButtons page={currentImage} setPage={setCurrentImage} />
        </PaginationWrapper>
      </PageRightSection>
    </Page>
  );
};

export default HamelinPage;
