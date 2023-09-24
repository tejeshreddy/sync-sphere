import React from "react";
import Button from "../common/Button/Button";
import styles from "./Upload.module.scss";

export default function UploadFiles() {
  return (
    <div className={styles.uploadMain}>
      <Button title="Add a File" btnClass="btn-primary" />
      <Button title="Create a Folder" btnClass="btn-primary" />
    </div>
  );
}
