import { navigate, getToolbarTitle } from './app.po';

describe('Back Office Home', () => {
  beforeEach(navigate);

  it('Shows title in the toolbar', () => {
      expect(getToolbarTitle()).toEqual('Application Title');
  });
});
