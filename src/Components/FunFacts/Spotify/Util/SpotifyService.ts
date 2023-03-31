const client_id = 'f8ad907eba73435cab1eac252174520e';
const redirect_uri = 'http://localhost:3000/';


export const SpotifyService = {
    getAccessToken() {
        const accessToken = localStorage.getItem('SpotifyAccessToken')
        if(accessToken) {
            return accessToken;
        }
        
        // check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresInMatch) {
            localStorage.setItem('SpotifyAccessToken', accessTokenMatch[1]);
            //const expiresIn = Number(expiresInMatch[1]);
            //Clears parameters and allows a new access token to be grabbed following expiration.
            //window.setTimeout(() => accessToken = '', expiresIn * 10000);
            //indow.history.pushState('Access Token', null, '/');
            return accessTokenMatch[1];
        }
        else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirect_uri}`;
            window.location.href = accessUrl;
        }
    }
}