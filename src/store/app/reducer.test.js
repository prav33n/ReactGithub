
import * as Action from './actions';
import createStore from '../index';

describe('app/redux', () => {
  let store;


  beforeEach(() => {
    store = createStore();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Set Active repository', () => {
    it('should fail if there is no repo provided', () => {
      store.dispatch(Action.setSelectedRepo());
      expect(store.getState().app.selectedRepo).toEqual(null);
    });

    it('should set the repo passed in state', () => {
      store.dispatch(Action.setSelectedRepo('Futurice'));
      expect(store.getState().app.selectedRepo).toEqual('Futurice');
    });
  });
});