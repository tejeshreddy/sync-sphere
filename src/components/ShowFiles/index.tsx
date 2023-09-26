import React from "react";
import styles from "./ShowFiles.module.scss";
import { fetchFiles } from "../hooks/fetchFiles";

import { AiFillFileText, AiFillFolder } from "react-icons/ai";

export default function ShowFiles() {
  let { fileList } = fetchFiles();
  const openFile = (fileLink: string) => {
    window.open(fileLink);
  };
  return (
    <div className={styles.filesGrid}>
      {fileList.map(
        (file: {
          imageLink: "";
          id: "";
          imageName: "";
          isFolder: boolean;
          folderName: "";
        }) => (
          <div>
            <div
              className={`${styles.files}`}
              key={file.id}
              onClick={() => openFile(file.imageLink)}
            >
              {file.isFolder ? (
                <>
                  <AiFillFolder size={80} />
                  <p>{file.folderName}</p>
                </>
              ) : (
                <>
                  <AiFillFileText size={80} />
                  <p>{file.imageName}</p>
                </>
              )}

              {/* <img src={file.imageLink} alt="" className={styles.imageLink} /> */}
            </div>
          </div>
        ),
      )}
    </div>
  );
}
