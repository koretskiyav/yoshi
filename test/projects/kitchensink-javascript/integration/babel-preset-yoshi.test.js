const { initTest } = require('../../../utils');

describe('entries', () => {
  it('configures multiple entries', async () => {
    await initTest('babel-preset-yoshi');

    await page.waitForSelector('#async-double');

    const list = await page.$$eval('#babel-preset-yoshi p', elms => {
      return elms.reduce(
        (acc, next) => ({ ...acc, [next.id]: next.textContent }),
        {},
      );
    });

    expect(list['instance-property']).toEqual('instance-property');
    expect(list['instance-function']).toEqual('instance-function');
    expect(list['instance-bound-function']).toEqual('instance-bound-function');
    expect(list['static-property']).toEqual('static-property');
    expect(list['static-function']).toEqual('static-function');
    expect(list['static-bound-function']).toEqual('static-bound-function');
    expect(list['exponential-operator']).toEqual('8');
    expect(list['async-await-syntax']).toEqual('async/await syntax works!');
    expect(list['dynamic-import-named']).toEqual('named export');
    expect(list['dynamic-import-default']).toEqual('default export');
  });
});
