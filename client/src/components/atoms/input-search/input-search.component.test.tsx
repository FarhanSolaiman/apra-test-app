import { mount } from "enzyme";
import InputSearch from "./input-search.component";

describe("Input Search", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should render search input", () => {
    const wrapper = mount(
      <InputSearch handleSearch={jest.fn} setSearch={jest.fn} />
    );
    expect(wrapper).toBeTruthy();
  });
});
