import { _FlyOutKey } from "@/components/common/consultation-modal";
import {
  _HeaContactDetailStoreKey,
  _HeaHomeDetailStoreKey,
  _HeaSurveyOptionStoreKey,
} from "@services/hea/hea.service";
import {
  _HeeContactDetailStoreKey,
  _HeeEstimatedMeasureStoreKey,
  _HeeFinanceStoreKey,
  _HeeHomeDetailStoreKey,
} from "@services/hee/hee.service";

export class StoreUtil {
  public static isExist(stKey: string) {
    return !!(
      localStorage.getItem(stKey) && localStorage.getItem(stKey)?.length
    );
  }
  public static saveByKey(stKey: string, value: string) {
    localStorage.setItem(stKey, value);
  }

  public static getByKey(stKey: string) {
    return localStorage.getItem(stKey);
  }

  public static removeByKey(stKey: string) {
    localStorage.removeItem(stKey);
  }

  public static saveSessionStore(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  public static getSessionData(key: string) {
    return sessionStorage.getItem(key);
  }

  public static hasKeyInSession(key: string) {
    const keyVal = sessionStorage.getItem(key);
    return !!(keyVal && keyVal.length);
  }

  public static clearStore() {
    localStorage.removeItem(_HeeHomeDetailStoreKey);
    localStorage.removeItem(_HeeFinanceStoreKey);
    localStorage.removeItem(_HeeEstimatedMeasureStoreKey);
    localStorage.removeItem(_HeeContactDetailStoreKey);

    localStorage.removeItem(_HeaSurveyOptionStoreKey);
    localStorage.removeItem(_HeaHomeDetailStoreKey);
    localStorage.removeItem(_HeaContactDetailStoreKey);
  }
}
