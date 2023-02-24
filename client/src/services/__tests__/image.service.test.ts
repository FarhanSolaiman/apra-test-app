import axios from "axios";
import { ImageMock } from "../../types/mocks/image.mock";
import services from "../image.service";

jest.mock("axios");

const imageListMock = Array(10).fill(null).map(ImageMock);

describe("Image Service", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("List GET", () => {
    it("should process data successfully", async () => {
      jest
        .spyOn(axios, "get")
        .mockImplementationOnce(() => Promise.resolve(imageListMock));

      const result = await services.listGET();

      expect(result).toEqual(imageListMock);
    });
  });
});
