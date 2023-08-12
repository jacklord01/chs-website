export class EncodeingUtil {
  public static encodeBase64String = (stringVal: string) => {
    return Buffer.from(stringVal).toString("base64");
  };

  public static decodeBase64 = (encodedVal: string) => {
    return Buffer.from(encodedVal, "base64").toString();
  };
}
