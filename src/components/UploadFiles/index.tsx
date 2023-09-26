import React, { ChangeEvent, useState } from "react";
import Button from "../common/Button/Button";
import styles from "./Upload.module.scss";
import { fileUpload } from "@/API/FileUpload";
import CommonProgress from "../common/Progress/Progress";
import { eventNames } from "process";
import { addFolder } from "@/API/Firestore";

export default function UploadFiles() {
  const [isFileVisible, setFileVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFolderVisible, setFolderVisible] = useState(false);
  const [folderName, setFolderName] = useState("");

  const uploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    let file = event.target.files?.[0];
    fileUpload(file, setProgress);
  };

  const uploadFolder = () => {
    let payLoad = { folderName: folderName, isFolder: true, fileList: [] };
    addFolder(payLoad);
  };

  return (
    <div className={styles.uploadMain}>
      <Button
        title="Add a File"
        btnClass="btn-success"
        onClick={() => setFileVisible(!isFileVisible)}
      />
      {isFileVisible ? (
        <input
          type="file"
          onChange={(event) => uploadFile(event)}
          className="file-input file-input-bordered file-input-success w-full max-w-xs"
        />
      ) : (
        <></>
      )}

      <Button
        title="Create a Folder"
        btnClass="btn-success"
        onClick={() => setFolderVisible(!isFolderVisible)}
      />

      {isFolderVisible ? (
        <>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent w-full max-w-xs"
            onChange={(event) => setFolderName(event.target.value)}
          />
          <Button
            title="Create"
            btnClass="btn-success"
            onClick={uploadFolder}
          />
        </>
      ) : (
        <></>
      )}

      {progress === 0 || progress === 100 ? (
        <></>
      ) : (
        <CommonProgress progress={progress} />
      )}
    </div>
  );
}
