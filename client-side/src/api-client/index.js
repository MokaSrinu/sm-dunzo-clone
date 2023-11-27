import { apiClient } from "./axios";
import { routes } from "./routes";
import { getQueryParamsString } from "../utils/utils";

export const landingPageDetailsGet = (searchObj = null) => {
  const queryString = getQueryParamsString(searchObj);
  return apiClient({
    method: routes.LANDING_PAGE_DETAILS_FETCH.METHOD,
    url: `${routes.LANDING_PAGE_DETAILS_FETCH.URL}${
      queryString ? `?${queryString}` : ""
    }`,
  });
};

export const storeDetailsByCategoryGet = (searchObj = null) => {
  const queryString = getQueryParamsString(searchObj);
  return apiClient({
    method: routes.STORES_BY_CATEGORY_FETCH.METHOD,
    url: `${routes.STORES_BY_CATEGORY_FETCH.URL}${
      queryString ? `?${queryString}` : ""
    }`,
  });
};
