import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../../src/app/components/Home/Home';

let wrapper;
beforeEach(() => {
  wrapper = (
    <MemoryRouter>
      <Home/>
    </MemoryRouter>
  );
});
describe('should be rendered without error', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
