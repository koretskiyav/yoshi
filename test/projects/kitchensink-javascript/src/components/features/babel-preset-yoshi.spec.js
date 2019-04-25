import React from 'react';
import ReactDOM from 'react-dom';
import BabelPresetYoshi, { getAsyncStuff } from './babel-preset-yoshi';

it('should pass', async () => {
  const div = document.createElement('div');
  const asyncStuff = await getAsyncStuff();
  ReactDOM.render(<BabelPresetYoshi asyncStuff={asyncStuff} />, div);
});
