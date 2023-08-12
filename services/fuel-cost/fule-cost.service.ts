import http from "@services/http.service";
import { BerCalculateOutputDto } from "./dto/ber-calculate.output.dto";
import { InitDataOutputDto } from "./dto/inti-data.output.dto";
import http2 from "@services/http2.service";

class FuelCostService {
  private readonly fuelCostApiBase = "web/fuel-cost/";

  getIntialDropDownData = async (): Promise<InitDataOutputDto> => {
    const result = await http2.get(this.fuelCostApiBase + "init-data");
    return result.data.data;
  };

  getCalculatedBerWithPerKWHPrice = async (
    yearBuild: number,
    primaryHeatSourceId: number,
    centralHeatingTypeId: number,
    heatSourceId: number,
    houseTypeId: number
  ): Promise<BerCalculateOutputDto> => {
    const result = await http2.get(
      this.fuelCostApiBase +
        `calulate-ber?yearBuild=${yearBuild}&fkPrimaryHeatSourceId=${primaryHeatSourceId}&centralHeatingTypeId=${centralHeatingTypeId}&fkHeatSourceId=${heatSourceId}&fkHouseTypeId=${houseTypeId}`
    );
    return result.data.data;
  };

  getCalculatedPerKWHPrice = async (
    primaryHeatSourceId: number,
    heatSourceId: number,
    houseTypeId: number
  ): Promise<number> => {
    const result = await http2.get(
      this.fuelCostApiBase +
        `price-per-kwh?fkPrimaryHeatSourceId=${primaryHeatSourceId}&fkHeatSourceId=${heatSourceId}&fkHouseTypeId=${houseTypeId}`
    );
    return result.data.data;
  };
}

export default new FuelCostService();
