import getUser from "@/services/user.service";

export default async function Profile() {
  let user;
  try {
    user = await getUser() 
    console.log(user);
  } catch (error) {
    console.log(error);
  }
  return (
    <h1>sss</h1>
  )
}