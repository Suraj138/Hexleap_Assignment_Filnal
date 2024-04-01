"use client"
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import Card from "@/components/Card";
import TicketCard from "@/components/TicketCard";
import AdCard from "@/components/AdCard";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import ticket1 from "../assets/Ticket_Mockup 3.png";
import ticket2 from "../assets/ticket_img2.png";
import React,{ useState } from "react";
export default function Home() {
  const [theme, setTheme] = useState("light");

  const Cardsdata = [
    {
      id: 1,
      image: img1,
      title: "Sacramento River Cats",
      totalEvent: 48,
      sport: "baseball",
    },
    {
      id: 2,
      image: img2,
      title: "Las Vegas Aviators",
      totalEvent: 28,
      sport: "baseball",
    },
    {
      id: 3,
      image: img3,
      title: "new jersey devils",
      totalEvent: 15,
      sport: "ice hockey",
    },
    {
      id: 4,
      image: img2,
      title: "Las Vegas Aviators",
      totalEvent: 28,
      sport: "baseball",
    },
  ];

  const TicketCardsdata = [
    {
      id: 1,
      title: "Las Vegas Aviators",
      time: "OCT 15 | SUN | 4:30 PM",
      address: "Las Vegas Ballpark, Las Vegas, Nevada",
      btncontent: "Take Flight Collection",
      image: ticket1,
    },
    {
      id: 2,
      title: "Sacramento River Cats",
      time: "OCT 15 | SUN | 4:30 PM",
      address: "Sutter Health Park, Sacramento, California",
      btncontent: "Orange Collection",
      image: ticket2,
    },
    {
      id: 3,
      title: "Las Vegas Aviators",
      time: "OCT 15 | SUN | 4:30 PM",
      address: "Las Vegas Ballpark, Las Vegas, Nevada",
      btncontent: "Take Flight Collection",
      image: ticket1,
    },
  ];

  const handleTheme = () => {
    setTheme((prev) => (prev == "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`w-[100vw]  flex flex-col p-5 gap-4 justify-center 
    ${theme == "dark" ? "text-[#fff]" : null} place-items-center 
    ${theme == "dark" ? "bg-dark-primary" : "bg-light-primary"}`}
    >
      <button
        className={` absolute  top-3 right-3 ${
          theme == "dark" ? "bg-light-primary" : "bg-dark-primary"
        } ${
          theme == "dark" ? "text-[#000]" : "text-[#fff]"
        } p-2 rounded-[0.5rem]`}
        onClick={handleTheme}
      >
        Switch to {theme == "dark" ? "light" : "dark"}
      </button>
      <div className=" flex flex-col justify-center  place-items-center gap-[2rem] ">
        <div className="w-[80.52px] h-[41px] border-b-2 border-solid self-start border-[#738FFF]">
          <h3 className="text-2xl font-bold leading-9 text-left">Sports</h3>
        </div>
        <div className="flex flex-wrap justify-center  place-items-center gap-[1rem]">
          {Cardsdata.map((item) => (
            <Card
              key={item.id}
              theme={theme}
              image={item.image.src}
              title={item.title}
              events={item.totalEvent}
              sport={item.sport}
            />
          ))}

          <AdCard theme={theme} />
        </div>
        <button className=" w-[Fixed_(124.8px)px] h-[Hug_(46px)px] gap-[5px] px-[30px] py-2.5 rounded-[3px] bg-[#2C9CF0] text-[white] text-sm font-semibold leading-[25.89px] text-left shadow-[0px_4px_8px_0px_#0000000D]">
          See More
        </button>
      </div>

      <div
        className={`w-[1240px] h-[918px] ticket-top-container flex flex-col gap-[2rem] place-items-center justify-center 
      ${
        theme == "dark"
          ? "bg-[linear-gradient(180deg,#18282A_0%,#221A2C_100%)]"
          : "bg-[linear-gradient(180deg,#F9F8FF_0%,#F3F9FF_100%)]"
      }  `}
      >
        <div className="flex flex-col gap-[1.5rem]">
          <h1 className="text-[50px]  font-bold leading-[52.5px] text-center">
            Collection Spotlight
          </h1>
          <p className="w-[917px]  text-[0.95rem] leading-[22.65px] text-center ">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </p>
        </div>

        <div className="mobile1 flex justify-center gap-x-8">
            <div className="first:pr-10 but items-center flex flex-col justify-center">
              <button className="w-[2.296875rem] h-[3.0625rem] border border-[#2C9CF0] text-[#2C9CF0]">
                <figure className="flex justify-center">
                  <Image
                    src="/Vector.svg"
                    alt="button"
                    width={12}
                    height={21}
                    priority
                  />
                </figure>
              </button>
            </div>

            <TicketCard
              id="t1"
              imgsrc="/Ticket1.svg"
              team="Las Vegas Aviators"
              date={{ month: "Oct 15", day: "SUN", time: "4:30 PM" }}
              venue="Las Vegas Ballpark, Las Vegas, Nevada"
              collection="Take Flight"
            />

            <TicketCard
              id="t2"
              imgsrc="/Ticket2.svg"
              team="Sacramento River Cats"
              date={{ month: "Oct 15", day: "SUN", time: "4:30 PM" }}
              venue="Sutter Health Park, Sacramento, California"
              collection="Orange"
            />

            <TicketCard
              id="t3"
              imgsrc="/Ticket1.svg"
              team="Las Vegas Aviators"
              date={{ month: "Oct 15", day: "SUN", time: "4:30 PM" }}
              venue="Las Vegas Ballpark, Las Vegas, Nevada"
              collection="Take Flight"
            />

            <div className="last:pl-10 but flex flex-col justify-center">
              <button className="w-[2.296875rem] h-[3.0625rem] border border-[#2C9CF0] text-[#2C9CF0]">
                <figure className="flex justify-center">
                  <Image
                    src="/Vector1.svg"
                    alt="button"
                    width={12}
                    height={21}
                    priority
                  />
                </figure>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
