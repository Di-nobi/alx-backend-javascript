import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const first = uploadPhoto();
  const second = createUser();
  return Promise.all([first, second])
    .then((value) => {
      console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}