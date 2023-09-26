import React from "react";
import styles from "./ShowFiles.module.scss";
import { fetchFiles } from "../hooks/fetchFiles";
import { AiFillFileText, AiFillFolder } from "react-icons/ai";
import { useRouter } from "next/router";
import useFetchSession from "../hooks/useSession";

export default function ShowFiles({ parentId }: FolderStructure) {
  let { session } = useFetchSession();
  let { fileList } = fetchFiles(parentId, session?.user?.email as string);
  const router = useRouter();

  // console.log(session?.user.email);
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
          <div key={file.id}>
            {file.isFolder ? (
              <div
                className={`${styles.files}`}
                key={file.id}
                onClick={() => router.push(`/folder?id=${file.id}`)}
              >
                <AiFillFolder size={80} />
                <p>{file.folderName}</p>
              </div>
            ) : (
              <div
                className={`${styles.files}`}
                key={file.id}
                onClick={() => openFile(file.imageLink)}
              >
                <img src={file.imageLink} alt="" className={styles.imageLink} />
                <p>{file.imageName}</p>
              </div>
            )}
          </div>
        ),
      )}
    </div>
  );
}
