import React, { createContext, useCallback, useEffect, useState } from "react";
import InputSearch from "src/components/atoms/input-search/input-search.component";
import TableContent from "src/components/organisms/table/table.component";
import services from "src/services/image.service";
import { IImageDataPayload } from "src/types/image.type";
import Pagination from "@material-ui/lab/Pagination";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./photos-list.component.css";

const PhotosContext = createContext<IImageDataPayload | undefined>(undefined);

const PhotosList: React.FC = () => {
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [photos, setPhotos] = useState<IImageDataPayload>();

  <PhotosContext.Provider value={photos} />;

  useEffect(() => {
    services
      .photosGET(limit, page, search)
      .then((res) => {
        console.log(res);
        setPhotos(res);
        const count = Math.ceil(res.data.data.photos.meta.totalCount / limit);
        setPageCount(count);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [limit, page, search]);

  const handleSearch = useCallback(() => {
    services
      .photosGET(limit, page, search)
      .then((res) => {
        console.log(res);
        setPhotos(res);
        setPage(1);
        const count = Math.ceil(res.data.data.photos.meta.totalCount / limit);
        setPageCount(count);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [limit, page, search]);

  return (
    <>
      <InputSearch handleSearch={handleSearch} setSearch={setSearch} />
      <TableContent data={photos} />
      {photos && photos.data.data.photos.data.length > 0 ? (
        <div className="paginateContainer">
          <FormControl variant="outlined" className="formControl rowsChange">
            <InputLabel>Rows</InputLabel>
            <Select
              value={limit}
              onChange={(e) => {
                setLimit(Number(e.target.value));
                setPage(1);
              }}
              label="Rows"
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>
          <Pagination
            className="paginate"
            count={pageCount}
            variant="outlined"
            shape="rounded"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              setPage(
                Number(
                  (event.target as HTMLElement).innerHTML.replace(
                    /<(?<=<).*$/gm,
                    ""
                  )
                )
              );
            }}
          />
        </div>
      ) : null}
    </>
  );
};

export default PhotosList;
