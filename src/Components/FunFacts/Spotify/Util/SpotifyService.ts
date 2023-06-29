import { IPlaylist } from "../Data/IPlaylist";

const client_id = 'fa30229f18eb4893a8a7b21a1eff89fc';
const client_secret = process.env.CLIENT_SECRET;

export const SpotifyService = {
    getAccessToken: async () => {
        const accessToken = localStorage.getItem('SpotifyAccessToken');
        if(accessToken !== '' && accessToken !== null) {
            return accessToken;
        }
        
        // check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresInMatch) {
            localStorage.setItem('SpotifyAccessToken', accessTokenMatch[1]);
            const expiresIn = Number(expiresInMatch[1]);
            //Clears parameters and allows a new access token to be grabbed following expiration.
            window.setTimeout(() => localStorage.setItem('SpotifyAccessToken', ''), expiresIn - 1);
            // window.history.pushState('Access Token', null, '/');
            return accessTokenMatch[1];
        }
        else {
            console.log(client_secret);
            var urlencoded = new URLSearchParams();
            urlencoded.append('grant_type', 'client_credentials');
            var authOptions = {
                method: 'POST',
                headers: {
                  'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: urlencoded
              };
              
              const response = await fetch('https://accounts.spotify.com/api/token', authOptions);
              if(response.status !== 200) {
                return;
              }
              
              const body = await response.json() as {access_token: string}
              localStorage.setItem('SpotifyAccessToken', body.access_token);
              return body.access_token;
            
        }
    },

    getPlaylist: async () => {
        const accessToken = await SpotifyService.getAccessToken();
        const response = await fetch(`https://api.spotify.com/v1/users/22lrbuvgjlng2i73ylvffudnq/playlists`, 
        {
            headers: {Authorization: `Bearer ${accessToken}`}
        });
        const playlists = await response.json() as {items: IPlaylist[]}
        return playlists.items.find(p => p.name === `Jack's Jams`);
        
    },

    getJacksJams: async () => {
        const accessToken = await SpotifyService.getAccessToken();
        const response = await fetch(`https://api.spotify.com/v1/playlists/5DB4G5PjPedbYhP0WhUxSN/tracks`, 
        {
            headers: {Authorization: `Bearer ${accessToken}`}
        });
        const playlist = await response.json() as IPlaylist;
        return playlist;
    }
}