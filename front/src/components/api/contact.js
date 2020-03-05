import { host, serverView } from '../../components/config/host';

const getToken = localStorage.getItem('token');

export async function postContact(contact) {
  try {
    await fetch(`${host}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': serverView
      },
      body: JSON.stringify(contact)
    });
    return { message: 'Votre message est pris en compte', success: true };
  } catch (error) {
    console.log(error);
    return { message: 'Erreur dans la creation du message', success: false };
  }
}

export async function getAllContact() {
  try {
    const response = await fetch(`${host}/api/contact`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': serverView,
        authorization: `Bearer ${getToken}`
      }
    });
    return response.json();
  } catch (error) {
    return 'Erreur dans la creation du message';
  }
}

export async function deleteContact(id) {
  try {
    await fetch(`${host}/api/contact/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': serverView,
        authorization: `Bearer ${getToken}`
      }
    });
    return 'Ce contact a été correctement supprimée';
  } catch (error) {
    return 'erreur avec la base de données pour supprimer';
  }
}
