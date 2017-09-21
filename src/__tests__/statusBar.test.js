import React from 'react';
import statusBar from '../components/statusBar/statusBar';

import renderer from 'react-test-renderer';

it('creates statusBar', () => {
  const rendered = renderer.create(<statusBar />).toJSON();
  expect(rendered).toBeTruthy();
});
