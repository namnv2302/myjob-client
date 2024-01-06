import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/store/firebase";

export const upload = async (file: any) => {
  try {
    const storageRef = ref(storage, `${file.uid}.${file.name.split(".")[1]}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  } catch (error) {
    console.error(error);
  }
};
