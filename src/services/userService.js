export async function getUsers() {
  try {
    const response = await fetch("http://localhost:3080/api/users");
    return response.json();
  } catch (err) {
    return err;
  }
}
export async function getAdmins() {
  try {
    const response = await fetch("http://localhost:3080/api/admins");
    return response.json();
  } catch (err) {
    return err;
  }
}
