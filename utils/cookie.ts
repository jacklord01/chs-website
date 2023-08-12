export abstract class CookieUtil {
  public static setCookie(name: string, value: string, days: number) {
    let expires;
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    } else {
      expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/;SameSite=Lax";
  }

  public static getCookie = (name: string): string | null | undefined => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts?.length == 2) return parts.pop()?.split(";").shift();

    return null;
  };

  public static deleteCookie = (name: string) => {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  };

  public static check = () => new Date();
}
