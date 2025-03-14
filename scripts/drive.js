const API_KEY = 'AIzaSyAEBc5aAxuQ96r5JMckp9tFtX1b1okcuLY';
const FILE_ID = 'https://drive.google.com/file/d/1XGEa9E-Cqs-JwQa1gizOCMecesXnECKh/view';

// Fetch data from Google Drive
async function fetchData(fileId) {
    const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Update data on Google Drive
async function updateData(fileId, data) {
    const url = `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media&key=${API_KEY}`;
    try {
        await fetch(url, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.error('Error updating data:', error);
    }
}