import { google } from "googleapis";
import path from "path";
import { Stream } from "stream";
import { fileURLToPath } from "url";

const __currentDir = path.dirname(fileURLToPath(import.meta.url));

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__currentDir, "..", "google_cred.json"),
  scopes: ["https://www.googleapis.com/auth/drive"],
});

const drive = google.drive({
  version: "v3",
  auth,
});

const uploadFile = async (fileObject, name) => {
  let imgURL;
  const bufferStream = new Stream.PassThrough();
  bufferStream.end(fileObject.buffer);
  const {
    data: { id },
  } = await drive.files.create({
    media: {
      mimeType: fileObject.mimeType,
      body: bufferStream,
    },
    requestBody: {
      name,
      parents: ["1SYMYbpKLVMHXuX198GnIrNVxDtLZbVff"],
    },
    fields: "id,name",
  });
  imgURL = `https://drive.google.com/file/d/${id}/view?usp=drive_link`;
  return imgURL;
};

export { uploadFile };
