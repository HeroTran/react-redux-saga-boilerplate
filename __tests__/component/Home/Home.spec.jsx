/*
import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from '../../../app/renderer/components/Home/Home';

let wrapper;
let getClassList;
beforeEach(() => {
  getClassList = jest.fn();
  const classList = [
    {
      code: 'B00744',
      booking_type: 1,
      room_id: 'b6991a15-f9ea-4746-af0c-d637dd66ee8e',
      time: '2020-05-31 06:00',
      availability_type: 1,
      availability_status: 'BOOKED',
      user_id: 2616,
      teacher_name: 'Tran Van Hung',
      learner_code: 'L00333',
      learner_name: 'Hero Tran',
      learner_next_level: '02051002',
      parent_code: 'P03140',
      lesson_code: null,
      feedbacks: [],
      reason: null,
      status: 'INIT',
    },
  ];
  const pagination = {
    current_page: 1,
    page_size: 5,
    total: 0,
  };
  wrapper = (
    <MemoryRouter>
      <Home
        classList={[]}
        pagination={pagination}
        getClassList={getClassList}
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