import React,{useRef} from "react";
import ItemCard from "../common/ItemCard";

export default function ComparisionContent() {
  const targetRef = useRef();

  const [activeTab, setActiveTab] = React.useState("overview");

  const menus = [
    {
      title: "Overview",
      isActive: true,
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
      window.scrollBy({ top: offset, left: 0, behavior: 'smooth' });
    }
  };
  const handleClick = (id) => {
    setActiveTab(id);
    scrollToTarget()
  };

 

  React.useEffect(() => {
    activeTab&&scrollToTarget()
  }, [activeTab]);

  return (
    <section className="max-w-screen-xl mx-auto relative">
      <div className="flex flex-wrap mt-[60px] md:mt-8 relative">
        <div className="hidden md:block md:w-[25%]">
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
        <div className="w-full md:w-[75%]">
          <div className="pl-2 md:pl-6" id="overview" ref={activeTab==='overview'?targetRef:null}>
            <div>
              <h3 className="text-[#49417b] font-normal mb-4">
                An Overview of Salesloft vs Outreach
              </h3>
              <p>
                An Overview of Salesloft vs Outreach Both Salesloft and Outreach
                are sales engagement platforms helping sales teams streamline
                outreach, automate tasks, and speed up the sales cycle.
              </p>
            </div>

            <div className="my-6" id="commonFeatures" ref={activeTab==='commonFeatures'?targetRef:null}>
              <h3 className="text-[#49417b] font-normal mb-4">
                Common Features
              </h3>
              {Features?.map((i, idx) => (
                <div className="flex gap-2 items-start mb-2" key={idx}>
                  <div className="pt-1 w-[30px] h-[30px]">
                    <img
                      src="/assets/checkbox.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <p>{i?.content}</p>
                </div>
              ))}
            </div>
            <div className="my-6" id="pricing"  ref={activeTab==='pricing'?targetRef:null}>
              <h3 className="text-[#49417b] font-normal mb-4">Pricing</h3>
              {pricing?.map((i, idx) => (
                <div className="flex gap-2 items-start mb-2">
                  <div className="pt-1 w-[30px] h-[30px]">
                    <img
                      src="/assets/checkbox.png"
                      alt=""
                      loading="lazy"
                    />
                  </div>{" "}
                  <p>{i?.content}</p>
                </div>
              ))}
            </div>
            <div className="my-6 w-full" id="pros" ref={activeTab==='pros'?targetRef:null}>
              <h3 className="text-[#49417b] font-normal mb-4">
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
            <div className="my-6" id="cons" ref={activeTab==='cons'?targetRef:null}>
              <h3 className="text-[#49417b] font-normal mb-4">
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
