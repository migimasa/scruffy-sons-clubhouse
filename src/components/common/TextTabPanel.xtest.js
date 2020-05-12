import React from "react";
import TextTabPanel from "./TextTabPanel";
import { shallow } from "enzyme";

function renderTextTabPanel(args) {
  const defaultProps = {
    children: [],
    index: 1,
    value: 1,
  };

  const props = { ...defaultProps, ...args };
  return shallow(<TextTabPanel {...props}>Test</TextTabPanel>);
}
