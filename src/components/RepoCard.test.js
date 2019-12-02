import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import createStore from '../store/index';
import RepoCard from './RepoCard';
import { repository } from '../test/mockData';



describe('<RepoCard />', () => {
    let store;
    const { name, url, language } = repository[0];

    const render = () => {
        return renderer.create(
            <Provider store={store}>
                <RepoCard />
            </Provider>
        );
    };


  beforeEach(() => {
    store = createStore({app: { selectedRepo: null }});
    store.dispatch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render repocard component , call dispatch onClick ',() => {
    const repoCard = render();
    repoCard.root.findByType("li").props.onClick('futurice');
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
