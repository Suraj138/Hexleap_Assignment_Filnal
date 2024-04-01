function TicketCard(props: {
    theme: String;
    title: String;
    time: String;
    address: String;
    btncontent: String;
    image: any;
  }) {
    return (
      <div className=" relative">
        <div
          className={`w-[257px] h-[625px] shadow-[0px_8px_16px_0px_#0000001A]
      ${
        props.theme == "dark" ? "bg-dark-secondary" : "bg-light-secondary"
      } flex flex-col justify-center place-items-center gap-[2rem] border-[Mixed] border-solid border-[#A9ACB2] `}
        >
          <div className="flex flex-col justify-center place-items-center ">
            <img src={props.image} className="w-[226.1px] h-[401.25px] " />
            <div className="w-[211px] h-0 text-[#A9ACB2] flex justify-center">
              __ __ __ __ __ __ __ __ __ __ __
            </div>
          </div>
  
          <div className="flex flex-col justify-center gap-[0.5rem] place-items-center">
            <h2
              className={`w-[213px] h-[27px] text-[17px] font-medium leading-[26.52px] text-center  ${
                props.theme == "dark" ? "text-[#fff]" : "text-black"
              }`}
            >
              {props.title}
            </h2>
            <p
              className={`w-[152.22px] h-[12.66px] text-sm font-normal leading-[21px] text-center ${
                props.theme == "dark" ? "text-[#fff]" : "text-black"
              }`}
            >
              {props.time}
            </p>
            <p
              className={`w-[213px] h-[31px] text-sm font-normal leading-[20.58px] text-center  ${
                props.theme == "dark" ? "text-[#DFDFDF]" : "text-[#525965]"
              }`}
            >
              {props.address}
            </p>
          </div>
          <button className="w-[213px] h-9 bg-[#1D1D1F] text-[white]">
            {props.btncontent}
          </button>
        </div>
  
        {props.theme === "dark" ? (
          <>
            <div className="w-5 h-5 bg-[linear-gradient(to_left,#221A2C_0%,#221A2C_54%,#221A2C_50%,#221A2C_100%)] border-none rounded-[50%] absolute bg-transparent top-[27rem] left-[-0.6rem] "></div>
            <div className="w-5 h-5 bg-[linear-gradient(to_right,#221A2C_0%,#221A2C_54%,#221A2C_50%,#221A2C_100%)] border-none rounded-[50%] absolute bg-transparent top-[27rem] right-[-0.6rem] "></div>
          </>
        ) : (
          <>
            <div className="w-5 h-5 bg-[linear-gradient(to_left,#D9D9D9_0%,#D9D9D9_54%,#F3F9FF_50%,#F3F9FF_100%)] border-none rounded-[50%] absolute bg-transparent top-[27rem] left-[-0.6rem] "></div>
            <div className="w-5 h-5 bg-[linear-gradient(to_right,#D9D9D9_0%,#D9D9D9_54%,#F9F8FF_50%,#F9F8FF_100%)] border-none rounded-[50%] absolute bg-transparent top-[27rem] right-[-0.6rem] "></div>
          </>
        )}
      </div>
    );
  }
  
  export default TicketCard;
