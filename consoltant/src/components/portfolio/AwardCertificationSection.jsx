import React, { useEffect, useState } from "react";
import "./PorfolioSection.css";
import styled from "styled-components";
import { getAwards } from "../../apis/Award";
import AwardItem from "./AwardItem";
import AwardForm from "./AwardForm.jsx";
import CertificationItem from "./CertificationItem.jsx";


const AwardCertificationSectionStyle = styled.div`
  width: 100%;
`;

const SectionTitleText = styled.div`
  width: 100%;
`;

const SectionTitleIcon = styled.img`
  width: 100%;
`;

const SectionBody = styled.div`
  width: 100%;

  height: auto;
`;

const SubSectionStyle = styled.div`
  width: 100%;
`;

const SubSectionHeader = styled.div`
  width: 100%;
`;

const SubSectionBody = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const SubSectionTitleText = styled.div`
  width: 100%;
`;

const SubSectionTitleButton = styled.div``;

const InputLabel = styled.label``;

const InputContainer = styled.input`
  border: 1px solid black;
`;

const PlusBoxContainer = styled.div`
  width: 12rem;
  height: 14.4rem;
  display: flex;
  flex-wrap: "wrap";
  justify-content: center;
  align-items: center;
`;

function AwardCertificationSection() {
  const [awardData, setAwardData] = useState(null);
  const [awardNum, setAwardNum] = useState(1);
  const [certificationData, setCertificationData] = useState(null);
  const [certificationNum, setCertificationNum] = useState(1);

  useEffect(() => {
    getAwardData();
  }, []);

  const getAwardData = async () => {
    const res = await getAwards();
    // console.log("res", res.award);
    setAwardData(res.award);
  };

  const addForm = () => {
    console.log(awardNum);
    setAwardNum(awardNum + 1);
  };

  const getCertificationdData = () => {
    // const res = await getCertifications();
    // console.log("res", res.award);
    // setAwardData(res.award);
  };

  return (
    <AwardCertificationSectionStyle>
      <SectionHeader title={"수상 / 자격증"} />

      <SectionBody>
        <SubSectionStyle>
          <SubSectionHeader>
            <SubSectionTitleText>수상</SubSectionTitleText>
            <SubSectionTitleButton />
          </SubSectionHeader>

          <SubSectionBody>
            <CertificationItem />
            {awardData && awardData.map((data) => <AwardItem data={data} />)}
            {Array.from({ length: awardNum }, (_, index) => (
              <AwardForm key={index}>Award {index + 1}</AwardForm>
            ))}
            <PlusBoxContainer>
              <PlusBox onClick={addForm} />
            </PlusBoxContainer>
          </SubSectionBody>
        </SubSectionStyle>
        <SubSectionStyle>
          <SubSectionHeader>
            <SubSectionTitleText>자격증</SubSectionTitleText>
            <SubSectionTitleButton />
          </SubSectionHeader>
          <SubSectionBody>
            <CertificationForm />
            <CertificationItem />
          </SubSectionBody>
        </SubSectionStyle>
      </SectionBody>
    </AwardCertificationSectionStyle>
  );
}

export default AwardCertificationSection;
