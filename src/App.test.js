import App from './App';
import {shallow} from 'enzyme';


import {NavItems} from "./StyledComponents/index"

describe('Component : NavItems', () => {
    test("Nav Item Home exists", ()=> {
      const wrapper= shallow(<App />);
      expect(wrapper.find(NavItems).children()).toHaveLength(3);
    })
})

