import { PropertyRateInput } from "@/app/types";

export const getRateDisplay = (input: PropertyRateInput) => {
  if (input.monthly) {
    return `${input.monthly}/mo`;
  } else if (input.weekly) {
    return `${input.weekly}/wk`;
  } else if (input.nightly) {
    return `${input}/night`;
  }
};
