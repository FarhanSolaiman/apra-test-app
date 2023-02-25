import { mount } from "enzyme";
import { ImageMock } from "src/types/mocks/image.mock";
import TableContent from "./table.component";

const imageListMock = {
  data: {
    data: {
      photos: {
        data: Array(10).fill(null).map(ImageMock),
        meta: {
          totalCount: 10,
        },
      },
    },
  },
};

describe("Table Content", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should render template", () => {
    const wrapper = mount(<TableContent data={imageListMock} />);

    expect(wrapper).toBeTruthy();
  });
});
