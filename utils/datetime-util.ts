export abstract class DateTimeUtil {
  public static getListOfYearsFromGivenYear = (startYear: number = 1900) => {
    return [...new Array(new Date().getFullYear() + 1 - startYear)].map(
      (val, i) => startYear + i
    );
  };
}
