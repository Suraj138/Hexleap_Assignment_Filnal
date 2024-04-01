

function Card(props: {
    theme: string;
    title: string;
    image:string;
    events: number;
    sport: string;
  }) {
    return (
      <div
        className={`flex flex-col justify-center place-items-center gap-[0.8rem] w-[238.53px] h-[511px]  
          ${
            props.theme == "dark" ? "bg-dark-secondary" : "bg-light-secondary"
          }  shadow-[0px_4px_8px_0px_#0000000D]`}
      >
        <img
          src={props.image}
          alt=""
          className="w-[218.4px] h-[385.31px] gap-0  "
        />
        <p className=" w-[187.2px] h-[21px] text-[17px] font-medium leading-[20.57px] self-start ml-3">
          {props.title}
        </p>
        <div
          className={`flex place-items-center justify-center gap-14 
              ${
                props.theme == "dark" ? "bg-dark-primary" : "bg-[#F7F7F8]"
              } w-[218.4px] h-[54px] rounded-[2px_0px_0px_0px]`}
        >
          <div className=" w-[70.45px] h-[31px];">
            <span
              className={`text-xs font-normal leading-[14.52px] text-left 
                      ${
                        props.theme == "dark"
                          ? "text-[#DFDFDF]"
                          : "text-[#525965]"
                      }`}
            >
              Total Events
            </span>
            <p className={`text-sm font-medium leading-[16.94px] text-left `}>
              {props.events} Events
            </p>
          </div>
          <div className="w-[70.45px] h-[31px];">
            <span
              className={`text-xs font-normal leading-[14.52px] text-left ${
                props.theme == "dark" ? "text-[#DFDFDF]" : "text-[#525965]"
              } `}
            >
              Spot
            </span>
            <p className="text-sm font-medium leading-[16.94px] text-left text-[black];">
              {props.sport}
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;
  