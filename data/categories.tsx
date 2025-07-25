import { anniversaryData } from "./anniversary";
import { birthdayData } from "./birthday";
import { loveData } from "./love";
import { promotionData } from "./promotion";
import { thanksData } from "./thank";

export const getCategoryData = (category: string) => {
  switch (category) {
    case "기념일":
      return anniversaryData;
    case "감사":
      return thanksData;
    case "생일":
      return birthdayData;
    case "사랑":
      return loveData;
    case "승진":
      return promotionData;
    default:
      return anniversaryData; // 기본값
  }
};
