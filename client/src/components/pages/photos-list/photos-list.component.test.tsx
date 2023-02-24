import { mount } from "enzyme";
import PhotosList from "./photos-list.component";

describe("Photos List", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should render container", () => {
    const wrapper = mount(<PhotosList />);
    expect(wrapper).toBeTruthy();
  });
});
