import faker from "faker";
import { IImageData } from "../image.type";

export const ImageMock = (data: Partial<IImageData> = {}): IImageData => ({
  id: faker.datatype.number(),
  title: faker.datatype.string(),
  url: faker.image.imageUrl(),
  thumbnailUrl: faker.image.imageUrl(),
  ...data,
});
