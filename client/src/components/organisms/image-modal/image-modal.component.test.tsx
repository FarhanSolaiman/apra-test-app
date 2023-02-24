import { mount } from "enzyme";
import { ImageMock } from "src/types/mocks/image.mock";
import ImageModal from "./image-modal.component";

const photoListMock = Array(10).fill(null).map(ImageMock);

describe("Private Template", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should render template", () => {
    const wrapper = mount(
      <ImageModal data={1} list={photoListMock} open handleClose={jest.fn} />
    );

    expect(wrapper).toBeTruthy();
  });
});
