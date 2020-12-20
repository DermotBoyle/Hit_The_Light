import React from "react";
import GameWrapper from "./index";
import { shallow, mount } from "enzyme";

import ReactModal from 'react-modal';
ReactModal.setAppElement('*');

describe("Component: GameWrapper", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GameWrapper />);
  });

  test("Initial state of level", () => {
    expect(wrapper.find(".level").text()).toContain("lvl: 1");
  });

  describe("Component state: GameWrapper", () => {


    test("it should progress to next level on correct click", () => {
      const setScore = jest.fn();
      const wrapper = mount(<GameWrapper onClick={setScore} />);
      const handleClick = jest.spyOn(React, "useState");
      handleClick.mockImplementation((score) => [score, setScore]);

      const component = wrapper.findWhere((item) => {
        return item.props("saturate").saturate === "100%";
      });

      component.simulate("click");
      expect(wrapper.find('.level').first().text()).toEqual("lvl: 2")    });

    test("it should set modal to open on incorrect click", ()=> {
        const setIsOpen = jest.fn();
        const wrapper = mount(<GameWrapper onClick={setIsOpen} />);
        const handleClick = jest.spyOn(React, "useState");
        handleClick.mockImplementation((modalIsOpen) => [modalIsOpen, setIsOpen]);
  
        const component = wrapper.findWhere((item) => {
          return item.props("saturate").saturate === "50%";
        }).first();
        component.simulate("click");
        expect(wrapper.find('.level').first().text()).toEqual("lvl: 1")
    })
  });
});
