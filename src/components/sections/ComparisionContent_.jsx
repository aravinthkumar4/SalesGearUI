import React, { useRef, useEffect, useState } from "react";
import ItemCard from "../common/ItemCard";

export default function ComparisionContent() {
  const targetRef = useRef();
  const containerRef = useRef();
  const lastScrollTop = useRef(0);

  const [activeTab, setActiveTab] = React.useState("");
  const [indexOfDiv, setIndexOfDiv] = useState(0);

  const menus = [
    {
      title: "Overview",
      id: "overview",
    },
    {
      title: "Common Features",
      id: "commonFeatures",
    },
    {
      title: "Pricing",
      id: "pricing",
    },
    {
      title: "Salesloft vs Outreach Pros",
      id: "pros",
    },
    {
      title: "Salesloft vs Outreach Cons",
      id: "cons",
    },
  ];

  const Features = [
    {
      content:
        "Efficient outreach - Both platforms automate and simplify the process of reaching out to prospects, saving valuable time for sales teams.",
    },
    {
      content:
        "Account management - Sales professionals can create and manage account p ensuring crucial information is organized and easily accessible.",
    },
    {
      content:
        "Activity tracking - Both platforms have the ability to track and monitor contact ac helping sales teams stay organized and focused.",
    },
    {
      content:
        "Task automation - They offer automation features that reduce manual work and for more valuable sales activities.",
    },
  ];
  const pricing = [
    {
      content:
        "Salesloft operates on annual contracts. The price ranges from $125 - $165 /user/month depending on the plan that you go with.",
    },
    {
      content: "Outreach pricing starts from $1200 per user annually.",
    },
  ];
  const Pros = [
    {
      lcontent: "Ideal for sales reps heavily engaged in cold calling",
      rcontent: "Lead scoring for effective lead prioritization",
    },
    {
      lcontent:
        "Effective for managing multiple prospects and campaigns simultaneously",
      rcontent: "Solid task management features",
    },
    {
      lcontent: "Robust analytics and reporting capabilities",
      rcontent: "Comprehensive analytics to track team performance",
    },
    {
      lcontent: "Seamless integration with Salesforce",
      rcontent: "Seamless integration with Salesforce",
    },
  ];
  const Cons = [
    {
      lcontent: "Mastering all features may require time and effort",
      rcontent: "Steep learning curve due to extensive features",
    },
    {
      lcontent: "Inconsistent cold calling capabilities",
      rcontent: "Each license can only connect 2 email accounts",
    },
    {
      lcontent: "Support takes at least 48 hours to respond",
      rcontent: "Support available only through email",
    },
    {
      lcontent: "Pricing ranges from $1500 - $1980 per user, paid annually",
      rcontent: "Pricing starts from $1200 per user annually",
    },
  ];

  const scrollToTarget = () => {
    if (targetRef.current) {
      const offset = targetRef.current.getBoundingClientRect().top - 100;
      window.scrollBy({ top: offset, left: 0, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const scrollPos = window.scrollY;

    const containerHeight = containerRef.current.getBoundingClientRect().top;

    if (scrollPos - containerHeight <= 0 && targetRef.current === undefined) {
      setActiveTab(menus[0].id);
    }

    if (targetRef.current) {
      const targetDivHeight =
        targetRef.current.getBoundingClientRect().bottom - 100;
      const targetTotoalHeight = targetRef.current.clientHeight;

      if (scrollPos > lastScrollTop.current) {
        if (targetDivHeight <= 0 && menus.length - 2 >= indexOfDiv) {
          setActiveTab(menus[indexOfDiv + 1].id);
          setIndexOfDiv((preState) => preState + 1);
        }
      } else if (scrollPos < lastScrollTop.current) {
        if (
          targetDivHeight > targetTotoalHeight &&
          indexOfDiv !== 0 &&
          menus.length >= indexOfDiv
        ) {
          setActiveTab(menus[indexOfDiv - 1].id);
          setIndexOfDiv((preState) => preState - 1);
        }
      }
    }
    lastScrollTop.current = scrollPos;
  };

  const handleClick = (id) => {
    setActiveTab(id);
    scrollToTarget();
    const indexOfDiv = menus.findIndex((menu) => menu.id === id);
    setIndexOfDiv(indexOfDiv);
  };

  useEffect(() => {
    activeTab && scrollToTarget();
  }, [activeTab]);
  useEffect(() => {
    if (window.innerWidth >= 769) {
      typeof indexOfDiv === "number" &&
        window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  return (
    <section className="max-w-screen-xl mx-auto relative pb-2 md:pb-10">
      <div className="flex flex-wrap mt-[60px] md:mt-8 relative">
        <div className="hidden lg:block md:w-[25%]">
          <div className="sticky top-[90px]">
            {menus?.map((ele, idx) => (
              <ItemCard
                {...ele}
                key={idx}
                activeTab={activeTab}
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[75%]">
          <div className="pl-2 md:pl-4 lg:pl-6" ref={containerRef}>
            <div
              id="overview"
              ref={activeTab === "overview" ? targetRef : null}
            >
              <h3 className="text-[#49417b] font-normal pb-4">
                An Overview of Salesloft vs Outreach
              </h3>
              <p>
                An Overview of Salesloft vs Outreach Both Salesloft and Outreach
                are sales engagement platforms helping sales teams streamline
                outreach, automate tasks, and speed up the sales cycle.
              </p>
            </div>

            <div
              className="py-6"
              id="commonFeatures"
              ref={activeTab === "commonFeatures" ? targetRef : null}
            >
              <h3 className="text-[#49417b] font-normal pb-4">
                Common Features
              </h3>
              {Features?.map((i, idx) => (
                <div className="flex gap-2 items-start pt-2" key={idx}>
                  <div className="pt-1">
                    <svg
                      width="18"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="2"
                        fill="#c4caf6"
                        stroke="#7485f8"
                        stroke-width="1"
                      />

                      <path
                        d="M4 9 L8 13 L15 6"
                        stroke="#7485f8"
                        stroke-width="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <p>{i?.content}</p>
                </div>
              ))}
            </div>
            <div
              className="py-6"
              id="pricing"
              ref={activeTab === "pricing" ? targetRef : null}
            >
              <h3 className="text-[#49417b] font-normal pb-4">Pricing</h3>
              {pricing?.map((i, idx) => (
                <div className="flex gap-2 items-start pt-2">
                  <div className="pt-1">
                    <svg
                      width="18"
                      height="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="2"
                        fill="#c4caf6"
                        stroke="#7485f8"
                        stroke-width="1"
                      />

                      <path
                        d="M4 9 L8 13 L15 6"
                        stroke="#7485f8"
                        stroke-width="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <p>{i?.content}</p>
                </div>
              ))}
            </div>
            <div
              className="py-6 w-full"
              id="pros"
              ref={activeTab === "pros" ? targetRef : null}
            >
              <h3 className="text-[#49417b] font-normal pb-4">
                Salesloft vs Outreach Props
              </h3>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-lg text-gray-700 bg-gray-50">
                  <tr className="bg-[#eff3f9]">
                    <th
                      scope="col"
                      className="px-6 py-6 text-[#02524b] border text-[16px] md:text-[18px]"
                    >
                      Salesloft
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-6 text-[#5d55ff] border text-[16px] md:text-[18px]"
                    >
                      Outreach
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Pros?.map((i, idx) => (
                    <tr className="bg-white border" key={idx}>
                      <th
                        scope="row"
                        className="font-[400] text-[16px] md:text-[18px] leading-[27px] text-[#1e1e1e] px-2 md:px-6 py-4"
                      >
                        {i?.lcontent}
                      </th>
                      <td className="font-[400] text-[16px] md:text-[18px] leading-[27px] text-[#1e1e1e] px-2 md:px-6 py-4 border">
                        {i?.rcontent}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              className="py-6"
              id="cons"
              ref={activeTab === "cons" ? targetRef : null}
            >
              <h3 className="text-[#49417b] font-normal pb-4">
                Salesloft vs Outreach Cons
              </h3>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-lg text-gray-700 bg-gray-50">
                  <tr className="bg-[#eff3f9]">
                    <th
                      scope="col"
                      className="px-6 py-6 text-[#02524b] border text-[16px] md:text-[18px]"
                    >
                      Salesloft
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-6 text-[#5d55ff] border text-[16px] md:text-[18px]"
                    >
                      Outreach
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Cons?.map((i, idx) => (
                    <tr className="bg-white border" key={idx}>
                      <th
                        scope="row"
                        className="font-[400] text-[16px] md:text-[18px] leading-[27px] text-[#1e1e1e] px-2 md:px-6 py-4"
                      >
                        {i?.lcontent}
                      </th>
                      <td className="font-[400] text-[16px] md:text-[18px] leading-[27px] text-[#1e1e1e] px-2 md:px-6 py-4">
                        {i?.rcontent}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
