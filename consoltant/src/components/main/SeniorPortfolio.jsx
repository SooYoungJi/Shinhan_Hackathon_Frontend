import RoundButton from "../common/RoundButton";

function SeniorPortfolio({ seniorPortfolio }) {
  console.log(seniorPortfolio);
  const seniorCompany = seniorPortfolio.content.split(",")[0];
  const seniorId = seniorPortfolio.content.split(",")[1];
  console.log(seniorPortfolio);
  return (
    <div className="relative px-[1rem] pt-[2rem] pb-[1rem] border bg-[#005DF9] rounded-[1rem] h-[13rem] shadow">
      <div className="absolute top-[0.5rem] right-[0.5rem]">
        <RoundButton />
      </div>
      <img
        className="absolute w-[5rem] right-[2rem]"
        src="/main/Envelope.png"
        alt=""
      />
      <div className="text-white text-[1.5rem]">
        선배님의
        <div className="font-OneShinhanBold my-[0.2rem]">"{seniorCompany}"</div>
        합격 포트폴리오가 <br /> 도착했어요
      </div>
    </div>
  );
}
export default SeniorPortfolio;
