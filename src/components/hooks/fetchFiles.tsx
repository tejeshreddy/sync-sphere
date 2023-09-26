import { onSnapshot, collection, query, where } from "firebase/firestore";
import { database } from "@/firebaseConfig";
import { useEffect, useState } from "react";
let files = collection(database, "files");
import useFetchSession from "../hooks/useSession";

export const fetchFiles = (parentId: string, userEmail: string) => {
  const [fileList, setFileList] = useState<ArrayType>([]);

  const getFolders = () => {
    if (userEmail) {
      let emailQuery = query(files, where("userEmail", "==", userEmail));
      if (!parentId) {
        onSnapshot(emailQuery, (response) => {
          setFileList(
            response.docs
              .map((item) => {
                return { ...item.data(), id: item.id };
              })
              .filter((item: any) => item.parentId === ""),
          );
        });
      } else {
        onSnapshot(emailQuery, (response) => {
          setFileList(
            response.docs
              .map((item) => {
                return { ...item.data(), id: item.id };
              })
              .filter((item: any) => item.parentId === parentId),
          );
        });
      }
    }
  };

  useEffect(() => {
    getFolders();
  }, [fileList, userEmail]);

  return { fileList };
};
