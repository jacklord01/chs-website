import React from "react";

interface ElementTableProps {}

const ElementTable: React.FC<ElementTableProps> = () => {
  return (
    <div className="app-element-table bg-[#F3F3F3]">
      <div className="container mx-auto px-[16px] pt-[16px]">
        <div className="app-element-table-inner bg-white max-w-[970px] mx-auto pt-[50px] pb-[50px] px-[50px]">
          <p>
            Not all elements lose the same amount of heat or cost that same
            amount to upgrade, so it is sensible to recommend the measures that
            save the most and cost the least to begin with before including the
            items with the longer payback periods.
          </p>
          <p className="mt-[40px]">
            To make a house Heat Pump Ready, the following U-Value targets
            should be included as part of retrofit design recommendations, in
            line with backstop U-Values for existing dwellings as set out in TGD
            L Dwelling 2019.
          </p>

          <div className="app-element-table-title text-center my-[50px] text-[#204971]">
            <h3>Existing Buildings-Part L 2011</h3>
          </div>
          <div className="app-element-table-list">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="text-left">Building Element</th>
                  <th className="text-left">Minimum U-Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ground Floor (No Underfloor Heating)</td>
                  <td>0.45W/m²K</td>
                </tr>
                <tr>
                  <td>Ground Floor (Underfloor Heating)</td>
                  <td>0.15W/m²K</td>
                </tr>
                <tr>
                  <td>External Walls (Cavity)</td>
                  <td>0.55W/m²K</td>
                </tr>
                <tr>
                  <td>External Walls (Not Cavity)</td>
                  <td>0.35W/m²K</td>
                </tr>
                <tr>
                  <td>Flat Roof</td>
                  <td>0.25W/m²K</td>
                </tr>
                <tr>
                  <td>Pitched Roof (Sloping Ceilings, Rafter Level)</td>
                  <td>0.25W/m²K</td>
                </tr>
                <tr>
                  <td>Cold Roof (Ceiling Level)</td>
                  <td>0.16W/m²K</td>
                </tr>
                <tr>
                  <td>External Doors, Windows, Rooflights & Curtain Walling</td>
                  <td>1.40W/m²K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementTable;
