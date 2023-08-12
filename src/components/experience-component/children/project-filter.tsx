import React from "react";

interface ProjectFilterProps {}

const ProjectFilter: React.FC<ProjectFilterProps> = () => {
  return (
    <div className="app-project-filter pt-[50px] lg:pb-[50px] pb-[50px]">
      <div className="container mx-auto px-[16px]">
        <div className="text-center mb-[50px] border-b-[1px] border-b-[#204971]">
          <h2 className="text-[#204971] pb-[45px]">Filter By</h2>
        </div>
        <div className="flex flex-row mx-[-15px]">
          <div className="form-group basis-1/4 px-[15px]">
            <label className="form-label" htmlFor="firstName">
              <b>Location</b>
            </label>
            <select className="form-select">
              <option> Ireland</option>
              <option> Ireland</option>
            </select>
          </div>
          <div className="form-group basis-1/4 px-[15px]">
            <label className="form-label" htmlFor="firstName">
              <b>House type</b>
            </label>
            <select className="form-select">
              <option> Semi-Detached House</option>
              <option> Semi-Detached</option>
            </select>
          </div>
          <div className="form-group basis-1/4 px-[15px]">
            <label className="form-label" htmlFor="firstName">
              <b>Upgrade Measures</b>
            </label>
            <select className="form-select">
              <option> BER A3</option>
              <option> Semi-Detached</option>
            </select>
          </div>
          <div className="form-group basis-1/4 px-[15px]">
            <label className="form-label" htmlFor="firstName">
              <b>Cost</b>
            </label>
            <select className="form-select">
              <option> €2000-3000</option>
              <option> Semi-Detached</option>
            </select>
          </div>
        </div>
        <div className="text-center mt-[50px]">
        <button type="button" className="btn btn-primary">Search</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;
