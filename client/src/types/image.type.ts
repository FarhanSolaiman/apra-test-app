export interface IImageData {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface IAlbumData {
  id: number;
  photos: Array<IImageData>;
}

export interface IAlbumsData {
  id: number;
  title: string;
}

export interface IImageDataPayload {
  data: {
    data: {
      photos: {
        data: Array<IImageData>
      }
    }
  }
}

export interface IAlbumDataPayload {
  data: {
    data: Array<IAlbumData>
  }
}

export interface IAlbumsDataPayload {
  data: {
    data: Array<IAlbumsData>
  }
}
