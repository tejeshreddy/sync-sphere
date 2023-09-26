import { database } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

let files = collection(database, "files");

export const addFile = (
  imageLink: string,
  imageName: string,
  parentId: string,
  userEmail: string,
) => {
  try {
    addDoc(files, {
      imageLink: imageLink,
      imageName: imageName,
      isFolder: false,
      parentId: parentId,
      userEmail: userEmail,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addFolder = (payLoad: {}) => {
  try {
    addDoc(files, {
      ...payLoad,
    });
  } catch (error) {
    console.log(error);
  }
};
