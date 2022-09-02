import envirement from "../endpointUrl";

export async function getUsers() {
  try {
    const response = await fetch(`${envirement.endpointUrl}/users`);
    return response.json();
  } catch (err) {
    return err;
  }
}

export async function getAdmins() {
  try {
    const response = await fetch(`${envirement.endpointUrl}/admins`);
    return response.json();
  } catch (err) {
    return err;
  }
}
