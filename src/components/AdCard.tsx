import Adimg from "../assets/AdImg.png";

function AdCard(props: { theme: string }) {
  return (
    <div
      className={`flex flex-col justify-center place-items-center gap-[0.8rem] w-[238.53px] h-[511px] 
    ${
      props.theme == "dark" ? "bg-dark-secondary" : "bg-light-secondary"
    }  shadow-[0px_4px_8px_0px_#0000000D]`}
    >
      <div
        className={`w-[218.4px] h-[491px] flex flex-col gap-[1.5rem] 
            ${
              props.theme == "dark" ? "bg-dark-secondary" : "bg-light-secondary"
            } border-[0px_0px] border-[0.2px] border-solid border-[#006555] `}
      >
        <div className=" relative">
          <img
            src={Adimg.src}
            alt=""
            className="w-[218.4px] h-[218px] object-cover"
          />

          <div className=" absolute top-[0rem] right-0 bg-[black] text-[#fff] w-[Fixed_(48.09px)px] h-[Hug_(25px)px]  px-[15px] py-[3px] ">
            Ad
          </div>
        </div>

        <div className="flex flex-col gap-[1rem] justify-center place-items-center">
          <h3
            className={`text-xl font-semibold leading-[24.2px] text-left ${
              props.theme == "dark" ? "text-[#fff]" : "text-[#222D3A]"
            }`}
          >
            Advertisement title
          </h3>
          <p
            className={`text-[12.8px] w-[188.34px] h-[171px] font-normal leading-[19px] text-left;  ${
              props.theme == "dark" ? "text-[#DFDFDF]" : "text-[#525965]"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdCard;
