// @babel/preset-env
export const twoInTheCube = 2 ** 3;

export const asynAawaitFunc = async () => {
  await (() => {})();
  return 'async/await syntax works!';
};

// @babel/plugin-proposal-class-properties

export class TestClass {
  instanceProperty = 'instance property';

  instanceFunction() {
    return this.instanceProperty.replace('property', 'function');
  }

  instanceBoundFunction = () => {
    return this.instanceProperty.replace('property', 'bound function');
  };

  static staticProperty = 'static property';

  static staticFunction() {
    return TestClass.staticProperty.replace('property', 'function');
  }

  static staticBoundFunction = () => {
    return TestClass.staticProperty.replace('property', 'bound function');
  };
}

// @babel/plugin-syntax-dynamic-import

export const dynamicImport = () => import('./dynamic-module');
