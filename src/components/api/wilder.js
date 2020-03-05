import { host, serverView } from '../../components/config/host';

const getToken = localStorage.getItem('token');

export async function postWilders(wilder) {
  try {
    await fetch(`${host}/api/wilder`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': serverView
      },
      body: JSON.stringify(wilder)
    });
    return { message: 'Votre message est pris en compte', success: true };
  } catch (error) {
    return { message: 'Erreur dans la creation du message', success: false };
  }
}

export async function getAllWilders() {
  try {
    const response = await fetch(`${host}/api/wilder`, {
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

export async function deleteWilder(id) {
  try {
    await fetch(`${host}/api/wilder/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': serverView,
        authorization: `Bearer ${getToken}`
      }
    });
    return 'Ce wilder a été correctement supprimé';
  } catch (error) {
    return 'erreur avec la base de données pour supprimer';
  }
}
