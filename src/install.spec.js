import * as vancedvue from './index';
import { createApp } from 'vue';

describe('install', () => {
  let cSpy, dSpy, app;

  beforeEach(() => {
    app = createApp({});

    cSpy = jest.spyOn(app, 'component');
    dSpy = jest.spyOn(app, 'directive');
  });

  it('should have install function', async () => {
    expect(vancedvue.install).toEqual(expect.any(Function));
  });

  it('should be able to install with prefix', () => {
    // simulate a Vue.use
    app.use(vancedvue, { prefix: 'vancedvue' });
    // components
    expect(cSpy).toBeCalledWith('vancedvueAlert', expect.any(Object));
    expect(cSpy).toBeCalledWith('vancedvueModal', expect.any(Object));
    // directives
    expect(dSpy).toBeCalledWith('vancedvue-tooltip', expect.any(Object));
    expect(dSpy).toBeCalledWith('vancedvue-scrollspy', expect.any(Object));
    // methods
    expect(app.config.globalProperties.$vancedvue_alert).toEqual(
      expect.any(Function)
    );
    expect(app.config.globalProperties.$vancedvue_notify).toEqual(
      expect.any(Function)
    );
  });
});
