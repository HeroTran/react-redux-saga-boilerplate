import 'regenerator-runtime/runtime'
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
process.env.API_HOST = '';
window.matchMedia = window.matchMedia || function() {
  return {
      matches : false,
      addListener : function() {},
      removeListener: function() {}
    };
};
jest.setTimeout(30000);
Enzyme.configure({
  adapter: new EnzymeAdapter()
})