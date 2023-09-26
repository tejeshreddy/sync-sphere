import { database } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

let files = collection(database, "files");

export const addFile = (imageLink: string, imageName: string) => {
  try {
    addDoc(files, {
      imageLink: imageLink,
      imageName: imageName,
      isFolder: false,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addFolder = (payLoad: {
  folderName: string;
  isFolder: boolean;
  fileList: object;
}) => {
  try {
    addDoc(files, {
      folderName: payLoad.folderName,
      isFolder: payLoad.isFolder,
      fileList: payLoad.fileList,
    });
  } catch (error) {
    console.log(error);
  }
};
