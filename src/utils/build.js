const environment = process.env.NODE_ENV;
const isDevelopmentMode = environment === 'development';
const isProductionMode = environment === 'production';
const isTestingMode = environment === 'test';

/**
 * Start local api database mock
 * */
const startLocalApi = process.env.REACT_APP_LOCAL_API === 'true' && (isDevelopmentMode || isTestingMode);

export { environment, isDevelopmentMode, isProductionMode, isTestingMode, startLocalApi };
