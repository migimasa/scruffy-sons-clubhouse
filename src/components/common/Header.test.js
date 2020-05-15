import React from "react";
import Header from "./Header";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

const defaultProps = {
  auth: {
    isAuthenticated: () => {
      return true;
    },
    login: () => {},
    logout: () => {},
  },
};

//Note how with shallow render you search for the React component tag
// it("contains 3 NavLinks via Shallow", () => {
//   const wrapper = renderHeader();
//   const numLinks = wrapper.find("Link").length;

//   expect(numLinks).toEqual(3);
// });

// Note how with mount you search for the final rendered HTML since it generates the final DOM.
// We also need to pull in React Router's memoryRouter for testing since the Header expects to have React Router's props passed in.
it("contains 3 anchors via mount", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header {...defaultProps} />
    </MemoryRouter>
  ).find("a").length;

  expect(numAnchors).toEqual(3);
});
