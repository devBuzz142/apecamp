import styled from "@emotion/styled";
import Page, { PageLeftSection, PageRightSection } from "./Page";

const CvPage = () => {
  return (
    <Page>
      <PageLeftSection>
        <div>관심 주제는 다음과 같습니다.</div>
        <div>
          - <b>'자기 정의'</b>
        </div>
        <div>
          - 인공지능이라는 기계를 통해, 인간이라는 자연지능을 재사유하기
        </div>
        <div>
          - 인간 고유의 영역이라 여겨진 '예술 창작 과정'의 기계적 재현을 통해
          인간 재사유하기
        </div>
        <div>- 다시 돌아와, 어떻게 '자기 정의'할 것인가</div>
        <br />
        <div>위의 주제를 토대로,</div>
        <div>배우로서 감각하고, 재현합니다.</div>
        <div>연출로서 사유하고, 제시합니다.</div>
        <div>공학도로서 구조화하고, 구현합니다.</div>
        <div>무대화한 것을 공유합니다.</div>
        <br />
        <div>
          {/* 우측은 간단한 CV입니다. 클릭하시면 상세설명 및 증빙자료를 확인하실 수
          있습니다. */}
        </div>
        <div>아래로 스크롤하시면서 포트폴리오를 확인하실 수 있습니다.</div>
      </PageLeftSection>
      <PageRightSection>
        <ul>
          <lh>
            <b>Art</b>
          </lh>
          <li>
            삼일로창고극장 24시간연극제 / 연극, 퍼포먼스 / 공동창작, 배우 참여 /
            삼일로 창고극장 / 2023
          </li>
          <li>
            서울프린지페스티벌 - {"<"}동굴뒤에터널있어요{">"} / 연극 / 배우 참여
            / 고라니특공대 / 2023
          </li>
          <li>
            서울프린지페스티벌 - {"<"}백퍼센또?해?피엔딩{">"} / 연극 / 배우 참여
            / 고라니특공대 / 2023
          </li>
          <li>
            {"<"}하멜린
            {">"} / 연극 / 연출 참여 / 고려대학교 학생회관 / 2023
          </li>
          <li>
            차세대 열전 2021! - {"<"}내가 우울증에 걸려 누워 있을 때{">"} / 연극
            / 배우 참여 / 국립극장 별오름극장 / 2022
          </li>
          <li>
            교내 연극 동아리 활동 / 회장, 조연출, 배우, 음향스탭 / 16 - 23
          </li>
        </ul>
        <br />
        <ul>
          <lh>
            <b>Enginerring</b>
          </lh>
          <li>
            {"<"}Codeplay
            {">"} / 기획, 개발 참여 / 24
          </li>
          <li>네이버 CONNECT 부스트캠프 AI TECH 6기 수료 / 23.11 - 24.04</li>
          <li>지능정보SW아카데미 2기 아이디어 해커톤 / 최우수상 / 23.05</li>
          <li>지능정보SW아카데미 2기 수료 / 23.03 - 23.06</li>
          <li>고려대학교 컴퓨터학과 학부 졸업 / 15.03 - 23.03</li>
        </ul>
      </PageRightSection>
    </Page>
  );
};

export default CvPage;
