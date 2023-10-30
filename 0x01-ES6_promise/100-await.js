import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
    let dataPic;
    let usr;
    try {
        dataPic = await uploadPhoto();
        usr = await createUser();
    } catch (err) {
      dataPic = null;
      usr = null;
    }

    return { dataPic, usr };
}