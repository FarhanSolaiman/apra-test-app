import { mount } from "enzyme";
import { ImageMock } from "src/types/mocks/image.mock";
import ImageModal from "./image-modal.component";

const photoMock = ImageMock();

describe("Private Template", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should render template", () => {
    const wrapper = mount(
      <ImageModal data={photoMock} open handleClose={jest.fn} />
    );

    expect(wrapper).toBeTruthy();
  });
});
