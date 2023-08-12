import Image from "next/image";
import React from "react";

interface ProjectListProps {
  options: Array<{
    id?: number;
    imagePath: string;
    heading: string;
    details: string;
  }>;
}

const ProjectList: React.FC<ProjectListProps> = ({ options }) => {
  return (
    <div className="app-project-list pt-[50px] lg:pb-[50px] pb-[50px] bg-[#F3F3F3]">
      <div className="container mx-auto px-[16px]">
        {options.map((item) => (
          <div className="app-project-list-item flex flex-row items-center mb-[25px]" key={item.id}>
            <div className="lg:basis-3/6">
              <Image
                className="max-w-full"
                src={item.imagePath}
                alt="Icon"
                width={470}
                height={320}
                loading="lazy"
              />
            </div>
            <div className="lg:basis-4/6">
              <h2>{item.heading}</h2>
              <ul className="room-info flex">
                <li className="flex items-center flex-wrap">
                  <svg width="16" viewBox="0 0 16 15" fill="currentColor">
                    <use href="/images/sprite.svg#svg-bed"></use>
                  </svg>
                  <span>3 Beds</span>
                </li>
                <li className="flex items-center">
                  <svg width="16" viewBox="0 0 16 16" fill="currentColor">
                    <use href="/images/sprite.svg#svg-baths"></use>
                  </svg>
                  <span>Baths</span>
                </li>
                <li className="flex items-center">
                  <svg width="16" viewBox="0 0 16 16" fill="currentColor">
                    <use href="/images/sprite.svg#svg-room"></use>
                  </svg>
                  <span>111.1m2</span>
                </li>
                <li className="flex items-center">
                  <svg width="16" viewBox="0 0 16 16" fill="currentColor">
                    <use href="/images/sprite.svg#svg-home"></use>
                  </svg>
                  <span>Semi-Detached House</span>
                </li>
              </ul>
              <ul className="ber-stage flex items-center mb-[15px]">
                <li>BER</li>
                <li className="warning">D2</li>
                <li className="icon bg-tp">
                  <svg width="33" viewBox="0 0 33 8" fill="currentColor">
                    <use href="/images/sprite.svg#svg-long-right-arrow"></use>
                  </svg>
                </li>
                <li>BER</li>
                <li className="success">A3</li>
              </ul>
              <p>{item.details}</p>
              <button
                type="button"
                className="btn btn-primary outline secondary-hover"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
