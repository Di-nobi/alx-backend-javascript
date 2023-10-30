import  SignUpUser  from './4-user-promise';
import  uploadPhoto  from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const [user, photo] = await Promise.allSettled([SignUpUser(firstName, lastName), uploadPhoto(fileName)]);
    const process = [
      {
        status: user.status,
        value: user.status === 'fulfilled' ? user.value : user.reason.toString(),
      },

      {
        status: photo.status,
        value: photo.status === 'fulfilled' ? photo.value : photo.reason.toString(),
      }
    ];
    return process;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
