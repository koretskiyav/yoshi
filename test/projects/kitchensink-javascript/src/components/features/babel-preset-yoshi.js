import React from 'react';
import {
  TestClass,
  twoInTheCube,
  asynAawaitFunc,
  dynamicImport,
} from './assets/babel-preset-yoshi';

const instance = new TestClass();

export const getAsyncStuff = () =>
  Promise.all([asynAawaitFunc(), dynamicImport()]);

export default ({ asyncStuff }) => (
  <div id="babel-preset-yoshi">
    <p id="instance-property">{instance.instanceProperty}</p>
    <p id="instance-function">{instance.instanceFunction()}</p>
    <p id="instance-bound-function">{instance.instanceBoundFunction()}</p>
    <p id="static-property">{TestClass.staticProperty}</p>
    <p id="static-function">{TestClass.staticFunction()}</p>
    <p id="static-bound-function">{TestClass.staticBoundFunction()}</p>
    <p id="exponential-operator">{twoInTheCube}</p>
    {asyncStuff && (
      <>
        <p id="async-await-syntax">{asyncStuff[0]}</p>
        <p id="dynamic-import-named">{asyncStuff[1].named}</p>
        <p id="dynamic-import-default">{asyncStuff[1].default}</p>
      </>
    )}
  </div>
);
