import React from "react";

export default function Footer() {
  const product = [
    "Why Salesgear?",
    "Outbond Lead Generation",
    "Inbond Lead Conversion",
    "Omnichannel outreach",
    "Sequences",
    "Ai Writing Assistant",
    "Report & Analytics",
  ];
  const Integrations=['Salesforce','Pipedrive','HubSpot','Zoho','Zapier','Automation']
  const Compare=['Outreach','Salesloft']
  const Resource=['Blog','Knowledge Base','Case Studies']
  const Company=['Careers','Contact us','Pricing','Request a Demo']
  return (
    <section>
    <div className="bg-[#eff3f9] px-10 top-half-circle pt-[60px]">
      <img width="200" src="/assets/logo.webp" alt="" loading="lazy" />
      <div className="grid md:grid-cols-4 mt-4">
        <div>
          <h4 className="mb-4 font-bold text-[#2f2669]">Product</h4>
          {product?.map((i,idx)=>(
            <p key={idx} className="mb-2 font-normal text-[#100552]">{i}</p>
          ))}
        </div>
        <div>
          <h4 className="mb-4 font-bold text-[#2f2669]">Integrations & Automation</h4>
          {Integrations?.map((i,idx)=>(
            <p key={idx} className="mb-2 font-normal text-[#100552]">{i}</p>
          ))}
        </div>
        <div>
          <h4 className="mb-4 font-bold text-[#2f2669]">Compare With</h4>
          {Compare?.map((i,idx)=>(
            <p key={idx} className="mb-2 font-normal text-[#100552]">{i}</p>
          ))}
          <h4 className="mb-4 font-bold text-[#2f2669]">Resources</h4>
          {Resource?.map((i,idx)=>(
            <p key={idx} className="mb-2 font-normal text-[#100552]">{i}</p>
          ))}
        </div>
        <div>
          <h4 className="mb-4 font-bold text-[#2f2669]">Company</h4>
          {Company?.map((i,idx)=>(
            <p key={idx} className="mb-2 font-normal text-[#100552]">{i}</p>
          ))}
          <div className="flex items-center gap-4"></div>
        </div>
      </div>
    </div></section>
  );
}
