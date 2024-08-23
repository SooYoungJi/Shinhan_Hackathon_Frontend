import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SectionHeader from "../SectionHeader";
import EducationForm from "./EducationForm";
import CareerForm from "./CareerForm";
import CareerItem from "./CareerItem";

const EducationSectionStyle = styled.div`
  width: 100%;
`;
const SectionTitleText = styled.div``;

const SectionTitleIcon = styled.img``;

const SectionBody = styled.div``;

const SubSectionStyle = styled.div``;

const SubSectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "OneShinhanBold";
  width: 100%;
  margin: 1rem 0;
  margin-left: 1rem;
  align-items: center;
`;

const SubSectionBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SubSectionTitleText = styled.div``;

const SubSectionTitleButton = styled.div`
  background-color: #c7c7c7;
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 2rem;
  text-align: center;
  line-height: 1.5rem;
  margin-left: 0.5rem;
`;

const InputLabel = styled.label``;
const InputContainer = styled.input`
  border: 1px solid black;
`;

function EducationCareerSection({ isEdit }) {
  const [awardData, setAwardData] = useState(null);

  useEffect(() => {
    getAwardData();
  }, [awardData]);

  const getAwardData = () => {};
  const getCertificationdData = () => {};

  return (
    <EducationSectionStyle>
      <SectionHeader title={"학력 / 경력"} image={"/Briefcase.svg"} />

      <SectionBody>
        <SubSectionStyle>
          <SubSectionHeader>
            <SubSectionTitleText>학력</SubSectionTitleText>
          </SubSectionHeader>

          <SubSectionBody>
            <EducationForm></EducationForm>
          </SubSectionBody>
        </SubSectionStyle>
        <SubSectionStyle>
          <SubSectionHeader>
            <SubSectionTitleText>경력</SubSectionTitleText>
            <SubSectionTitleButton>+</SubSectionTitleButton>
          </SubSectionHeader>
          <SubSectionBody>
            <CareerForm></CareerForm>
            <CareerItem></CareerItem>
          </SubSectionBody>
        </SubSectionStyle>
      </SectionBody>
    </EducationSectionStyle>
  );
}

export default EducationCareerSection;
