import React, { useState } from "react";
import "./table.component.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { IImageDataPayload } from "src/types/image.type";
import ImageModal from "../image-modal/image-modal.component";

type TableProps = {
  data: IImageDataPayload | undefined;
};

const TableContent: React.FC<TableProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table className="tableContainer" aria-label="customized table">
          <TableHead className="tableHeader">
            <TableRow>
              <TableCell className="tableHeader tableContent">ID</TableCell>
              <TableCell className="tableHeader tableContent">Title</TableCell>
              <TableCell className="tableHeader tableContent">
                Thumbnail
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.data.data.photos.data.length > 0 ? (
              data.data.data.photos.data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="tableContent">{row.id}</TableCell>
                  <TableCell className="tableContent">{row.title}</TableCell>
                  <TableCell>
                    <img
                      className="imageThumbnail"
                      src={row.thumbnailUrl}
                      alt={row.title}
                      onClick={() => {
                        handleOpen();
                        setSelect(row.id);
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="tableCenter">
                  No data is available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <ImageModal
        data={select}
        list={data?.data.data.photos.data ?? undefined}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default TableContent;
