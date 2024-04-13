import styled from "@emotion/styled";
import Page, { PageLeftSection, PageRightSection } from "./Page";

const CvPage = () => {
  return (
    <Page>
      <PageLeftSection>
        <div>저는 개발하고 있고 인공지능 관심있고 이걸로 -합니다.</div>
        <div>관심 주제는 무엇이구요</div>
        <div>
          배우로서 그 동안 방황하는 것을 해왔는데 앞으로 제가 구현할
          작업들이라는 것을 알았습니다.
        </div>
        <div>인공지능을 통해 무대 위에서 사람들과 만나고 싶습니다.</div>
        <br />
        <div>
          우측은 간단한 CV입니다. 클릭하시면 상세설명 및 증빙자료를 확인하실 수
          있습니다.
        </div>
        <div>또는 아래로 스크롤하시면서 포트폴리오를 확인하실 수 있습니다.</div>
      </PageLeftSection>
      <PageRightSection>
        <ul>
          <lh>Art</lh>
          <li>교내 연극 동아리 활동 / 조연출, 배우, 음향스탭 / 15 - 23</li>
          <li>
            차세대 열전 2022! - {"<"}내가 우울증에 걸려 누워 있을 때{">"} / 연극
            / 배우 참여 / 국립극장 별오름극장 / 2022
          </li>
          <li>
            {"<"}하멜린
            {">"} / 연극 / 연출 참여 / 고려대학교 학생회관 / 2023
          </li>
          <li>
            서울프린지페스티벌 - {"<"}백퍼센또?해?피엔딩{">"} / 연극 / 배우 참여
            / 고라니특공대 / 2023
          </li>
          <li>
            서울프린지페스티벌 - {"<"}동굴뒤에터널있어요{">"} / 연극 / 배우 참여
            / 고라니특공대 / 2023
          </li>
          <li>
            삼일로창고극장 24시간연극제 / 연극 / 공동창작, 배우 참여 / 삼일로
            창고극장 / 2023
          </li>
        </ul>
        <br />
        <ul>
          <lh>Enginerring</lh>
          <li>고려대학교 컴퓨터학과 학부 졸업 / 15.03 - 23.03</li>
          <li>지능정보SW아카데미 2기 수료 / 23.03 - 23.06</li>
          <li>지능정보SW아카데미 2기 아이디어 해커톤 / 최우수상 / 23.05</li>
          <li>네이버 CONNECT 부스트캠프 AI TECH 6기 수료 / 23.11 - 24.04</li>
          <li>
            {"<"}Codeplay
            {">"} / 기획, 개발 참여 / 24
          </li>
        </ul>
      </PageRightSection>
    </Page>
  );
};

export default CvPage;
