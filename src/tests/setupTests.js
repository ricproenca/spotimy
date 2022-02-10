import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: jest.fn(),
    i18n: {
      changeLanguage: jest.fn()
    }
  })
}));
