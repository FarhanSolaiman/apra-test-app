import PrivateTemplate from "./private.component";
import { mount } from "enzyme";

describe("Private Template", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should render template", () => {
    const wrapper = mount(<PrivateTemplate>Test</PrivateTemplate>);

    expect(wrapper).toBeTruthy();
  });
});
