import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import Cloud from './../../assets/qt=q_95.webp'
import {
  BsArrowRight,
   
} from 'react-icons/bs'

const Solutions = [
      
    {
        title: 'ON-TIME IN-FULL (OTIF)',
        description: "Increase efficiency, improve customer satisfaction, and stay ahead of the competition with Athena's comprehensive On-Time In-Full (OTIF) solutions. From predictive analytics to real-time visibility, our tailored solutions can help you meet your OTIF targets and exceed expectations.",
        },
        {
            title: 'COST TO DELIVER',
            description: "Unlock the full potential of your cost-to-deliver strategy with Athena’s comprehensive solution that encompasses elaborate data analysis, labor optimization, and logistics management. Experience the transformative power of our cost-to-deliver solution and revolutionize your supply chain management."
         },  
         {
            title: 'SUSTAINABILITY TRACKER',
            description: "Enable businesses to measure carbon emissions for each mile of delivery, promoting sustainability and efficiency. Our data-driven solution enhances sustainability tracking, compliance, cost savings, and environmental performance. Engage stakeholders, mitigate risks, and make a positive impact on your supply chain and the environment. Make a difference sustainably. "
         },  
         {
            title: 'DATA QUALITY SERVICES',
            description: "With infinite data being generated every second, enterprises struggle to steer clear of data inconsistencies or outdated information. Athena’s DQS is designed to help organizations ensure that their data is accurate, reliable, and fit for intended purposes. By leveraging its profiling, cleansing, matching, and integration capabilities, Athena improves the consistency, integrity, and quality of data.  "
         },
         {
            title: 'DEMAND MANAGEMENT',
            description: "Disrupt mundane manual processes and maximize cost-efficiency by capitalizing on Athena’s smart TSC. The curated solution holistically employs automation, technology, and data integration to streamline workflows, increase efficiency, and reduce the risk of errors or disruptions.   "
         },
         {
            title: 'AVAILABLE TO PROMISE',
            description: "Optimize inventory and meet customer demand accurately with Athena's ATP solution. Gain real-time inventory visibility, advanced calculations, and seamless integrations to streamline order fulfillment efficiently. We provide order journey visibility to customers and accurate product availability updates, enhancing their experience and boosting sales and customer retention.   "
         },
    
];

const Ourapproach = () => {
  return (
    <div  className="w-full my-16 ">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl text-[#37a9e6] font-bold text-center p-1 sm:py-8 md:px-12 pt-40">Athena's Readymade Solutions</h2>
        

        <div className=" grid grid-flow-row sm:grid-flow-col pt-4 gap-12 ">
        <div className="w-full">
          <img className=" mx-auto" src={Cloud} >
            
          </img>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1  gap-4">
       {Solutions.map((solution,i) => (
        <div key={i} className=" flex flex-col gap-4 m-4" >
            <h2 className="text-3xl mb-4 text-gray-800">{solution.title}</h2>
            <p className="text-xl mb-4 text-gray-500  ">{solution.description}</p>

        </div>
       ))}   
          
       
              </div>
      </div>
      </div>
    </div>
  );
};

export default Ourapproach;
