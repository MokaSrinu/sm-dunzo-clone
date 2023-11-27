const landingPageRoutes = {
    LANDING_PAGE_DETAILS_FETCH : {
        URL: '/api/landing-page',
        METHOD: 'GET',
    }
};

const storeRoutes = {
    STORES_BY_CATEGORY_FETCH: {
        URL: '/api/store/get-by-category',
        METHOD: 'GET',
    },
};

export const routes = {
    ...landingPageRoutes,
    ...storeRoutes,
};