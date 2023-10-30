import { uploadPhoto, creatUser } from './utils';

export default async function asyncUploadUser() {
    let dataPic;
    let usr;
    try {
        dataPic = await uploadPhoto();
        usr = await creatUser();
    } catch (err) {
        dataPic = null;
        usr = null;
    }

    return { dataPic, usr };
}