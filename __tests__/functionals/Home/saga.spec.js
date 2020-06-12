/*import { put } from 'redux-saga/effects';
import * as api from '../../../app/renderer/functionals/Home/api';
import { getClassListRequest } from '../../../app/renderer/functionals/Home/saga';

describe('login()', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  const data = [
    {
      code: "B00744",
      booking_type: 1,
      room_id: "b6991a15-f9ea-4746-af0c-d637dd66ee8e",
      time: "2020-05-31 06:00",
      availability_type: 1,
      availability_status: "BOOKED",
      user_id: 2616,
      teacher_name: "Tran Van Hung",
      learner_code: "L00333",
      learner_name: "Hero Tran",
      learner_next_level: "02051002",
      parent_code: "P03140",
      lesson_code: null,
      feedbacks: [],
      reason: null,
      status: "INIT"
    }
  ];
  const pagination = {current_page: 1, page_size: 5, total: 8}
  const action = {
    params:{
      page: 1,
      size: 5,
      start_time: '2020-05-13 10:43',
      end_time: '2020-06-13 10:43'
    }
  };

  it('Fetch class list success', () => {
    const gen = getClassListRequest(action);
    expect(gen.next().value).toEqual(
      put({ type: 'IS_LOADING_ENABLE_SUCCESS' })
    );
    const response = { data: { data, pagination } };
    expect(gen.next().value).toEqual(
      api.getClassList(action.params)
    );
    expect(gen.next(response).value.payload.action.type).toContain(
      'GET_CLASS_LIST_SUCCESS'
    );
    expect(gen.next().value).toEqual(
      put({ type: 'IS_LOADING_DISABLE_SUCCESS' })
    );
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });
  it('Fetch class list fail', () => {
    const gen = getClassListRequest(action);
    expect(gen.next().value).toEqual(
      put({ type: 'IS_LOADING_ENABLE_SUCCESS' })
    );
    expect(gen.next().value).toEqual(
      api.getClassList(action.params)
    );
    const response = {};
    expect(gen.next(response).value).toEqual(
      put({ type: 'IS_LOADING_DISABLE_SUCCESS' })
    );
    expect(gen.next(response).value.payload.action.type).toContain(
      'GET_CLASS_LIST_FAILURE'
    );
    expect(gen.next()).toEqual({ done: true, value: undefined });
  });
});
*/