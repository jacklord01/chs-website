export abstract class Utils {
  public static objToQueryString = (paramObject: any): string => {
    return Object.keys(paramObject)
      .map((key) => `${key}=${paramObject[key]}`)
      .join("&");
  };

  public static numberWithCommas = (x: any) => {
    if (!isNaN(x)) {
      return Number(x)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return x;
    }
  };
}
