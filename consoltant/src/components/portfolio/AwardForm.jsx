import React from "react";
import styled from "styled-components";

const AwardItemStyle = styled.div`
  background-color: #fffbeb;
  width: 12rem;
  height: 14.4rem;
  font-size: 1rem;
  border-top: #ffcc00 0.5rem solid;
  margin: 0.3rem 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0.5rem;
`;
const AwardItemBody = styled.div``;
const AwardHeaderStyle = styled.div`
  padding-top: 0.8rem;
  padding-bottom: 0.5rem;
  min-height: 3rem;
  border-bottom: #ffcc00 0.15rem solid;
`;

const AwardTitleStyle = styled.input`
  width: 100%;
  height: 2rem;
  font-family: "OneShinhanMedium";
  border: #c7c7c7 1px solid;
  border-radius: 0.2rem;
  background-color: #fbfbfd;
  padding-left: 0.3rem;
`;

const AwardContentStyle = styled.input`
  /* font-size: 0.7rem; */
  margin-top: 0.4rem;
  width: 100%;
  font-family: "OneShinhanMedium";
  border: #c7c7c7 1px solid;
  border-radius: 0.2rem;
  background-color: #fbfbfd;
  padding-left: 0.3rem;
`;
const AwardItemFooter = styled.div``;

const AwardGradeStyle = styled.input`
  /* font-size: 0.8rem; */
  text-align: right;
  width: 100%;
  font-family: "OneShinhanMedium";
  border: #c7c7c7 1px solid;
  border-radius: 0.2rem;
  background-color: #fbfbfd;
  padding-left: 0.3rem;
`;

const AwardOrganizationStyle = styled.input`
  /* font-size: 0.8rem; */
  text-align: right;
  width: 100%;
  font-family: "OneShinhanMedium";
  border: #c7c7c7 1px solid;
  border-radius: 0.2rem;
  background-color: #fbfbfd;
  padding-left: 0.3rem;
`;

const AwardAcqDateStyle = styled.input`
  font-size: 0.7rem;
  text-align: right;
  font-family: "OneShinhanBold";
  width: 100%;
  font-family: "OneShinhanMedium";
  border: #c7c7c7 1px solid;
  border-radius: 0.2rem;
  background-color: #fbfbfd;
  padding-left: 0.3rem;
`;

const AwardSubmitButton = styled.div`
  width: 100%;
  height: 2rem;
  background-color: #ffcc00;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 2rem;
  color: white;
`;

// 포트폴리오 옆에서 순서 바꾸게 리모컨 역할 해주는 것
function AwardForm({ data }) {
  return (
    <AwardItemStyle>
      <AwardItemBody>
        <AwardHeaderStyle>
          <AwardTitleStyle placeholder="대회명" />
        </AwardHeaderStyle>
        <AwardContentStyle placeholder="수상내용(100자 이하)" />
      </AwardItemBody>
      <AwardItemFooter>
        <AwardGradeStyle placeholder="수상명" />
        <AwardOrganizationStyle placeholder="주최" />
        <AwardAcqDateStyle placeholder="수상일"></AwardAcqDateStyle>
        <AwardSubmitButton>제출</AwardSubmitButton>
      </AwardItemFooter>
    </AwardItemStyle>
  );
}

export default AwardForm;
