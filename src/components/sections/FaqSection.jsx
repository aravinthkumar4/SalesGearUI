import React from "react";
const Card =React.lazy(()=>import( "../common/Card"));

export default function FaqSection() {
  const one = [
    {
      content:
        "Identify businesses matching your ICP from a database of over 200 million verified records",
    },
    {
      content:
        "Accelerate your prospecting efforts with instant access to key decision-makers from leading companies",
    },
  ];
  const two = [
    {
      content:
        " Boost your email reputation with automated warmup involving real interactions",
    },
    {
      content:
        "Your emails will be opened, tagged as important, and moved from the spam folder to improve your sender reputation score",
    },
    {
      content:
        "Every messqge sent for email warming will be personalized, showing youre not a spammer and validating your credibility",
    },
    {
      content:
        "Monitor your email health score and get a full view of email authentication status for all connected inboxes",
    },
  ];

  const three = [
    {
      content: "Check how engaging your emails are with the readability score",
    },
    {
      content:
        "Make sure your emails are written in a way that they always land in inboxes, not spam",
    },
  ];
  const four = [
    {
      content: "Get help whenever you need it",
    },
    {
      content:
        "Engage in biweekly calls with a dedicated account manager for timely resolution of queries",
    },
  ];
  const five = [
    {
      content:
        "Connect multiple email accounts to contact up to 10,000 prospects in a single day",
    },
    {
      content:
        "Automatically spread emails across different accounts at random intervals with smart domain rotation and avoid triggering spam filters",
    },
  ];
  return (
    <>
      {/* <div className="relative h-[200px] bg-gradient-to-r from-[#040978] via-[#384bc8] to-[#0912ee] overflow-hidden"> */}
     
      <section className="">
        <div className="bg-[#f4f4f6] px-[20px] py-[30px]">
          <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {/* <div className="grid"></div> */}
            <div className="grid">
            <Card
              title="Why limit yourself to an outreach tool when you can discover new business opportunities too?"
              data={one}
            />
            </div>
            <div className="md:row-span-2">
              <Card title="Make emailoutreach your highest of ROI" data={two} color='lightgreen' />
            </div>
            <div className="grid">
              <Card
                title="Write persuasive emails with tried and tested ChatGPT prompts"
                data={three}
                color='green'
              />
            </div>
            <div className="grid">
              <Card
                title="Live chat response in 2 minutes, not hours or days"
                data={four}
                color='darkgray'
              />
            </div>
            <div className="grid">
              <Card
                title="Efficiently expand your outbound efforts on a budget"
                data={five}
                color='orange'
              />
            </div>
          </div>
          </div>
        </div>
        {/* <div className="bg-[#eff3f9] px-[20px] md:px-[104px] py-[40px] md:py-[80px] "> */}
       
          {/* <div className="section"></div> */}
      </section>
    </>
  );
}
