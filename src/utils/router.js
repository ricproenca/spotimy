import { HOST } from '@Config/api';

/**
 * reloadPage
 * Reload application setting the url as the app base
 */
export const reloadPage = () => (window.location.href = HOST);

/**
 * getParamValues
 * Retrieves the params from an URL.
 *
 * @param {string} url
 * @returns Object
 */
export const getParamValues = url =>
  url
    .slice(1)
    .split('&')
    .reduce((prev, curr) => {
      const [title, value] = curr.split('=');
      prev[title] = value;
      return prev;
    }, {});

export default { reloadPage, getParamValues };
