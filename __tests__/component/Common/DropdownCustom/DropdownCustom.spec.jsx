/*
import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import DropdownCustom from '../../../../app/renderer/components/Common/DropdownCustom/DropdownCustom';

let wrapper;
let handleOnChange;
beforeEach(() => {
  handleOnChange = jest.fn();
  const data = [
   {code: "UY", name: "Uruguay"},
   {code: "UZ", name: "Uzbekistan"},
   {code: "VU", name: "Vanuatu"},
   {code: "VA", name: "Vatican City State"},
   {code: "VE", name: "Venezuela"},
   {code: "VN", name: "Vietnam"},
   {code: "VG", name: "Virgin Islands (British)"}
  ];
  const inputValue = "Vietnam";
  const filedName = "countries";
  wrapper = (
    <MemoryRouter>
      <DropdownCustom
        resultData={data}
        inputValue={inputValue}
        filedName={filedName}
        handleOnChange={handleOnChange}
      />
    </MemoryRouter>
  );
});
describe('should be rendered without error', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
*/