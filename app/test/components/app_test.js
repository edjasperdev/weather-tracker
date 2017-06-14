import { renderComponent, expect } from './../test_helper';
import App from '../../scripts/components/App';

describe('App', () => {
  it ('has the class of "app-container"', () => {
    const component = renderComponent(App);

    expect(component).to.have.class('app-container');

  });
});

