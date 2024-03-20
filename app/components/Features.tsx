import Image from "next/image";
import React from "react";
import { FEATURES } from "../constants";

function Features() {
  return (
    <section className=" flexCenter flex-col overflow-hidden bg-feature-bg bg-center ng-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src={"/phone.png"}
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        <div className="flex flex-col w-full lg:w-[60%]">
          <div className=" relative">
            <Image
              src={"/camp.svg"}
              alt="camp"
              width={50}
              height={50}
              className=" absolute top-[-28px] left-[-5px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>

          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

type featureItem = {
  title: string;
  description: string;
  icon: string;
};

const FeatureItem = ({ title, description, icon }: featureItem) => {
  return (
    <li className="flex flex-1 flex-col items-start w-full gap-2">
      <div className="p-4 bg-green-50 rounded-full lg:p-7">
        <Image src={icon} alt="icon" width={20} height={20} />
      </div>
      <div className="bold-20 lg:bold-32 capitalize mt-4">{title}</div>
      <div className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">{description}</div>
    </li>
  );
};
export default Features;
