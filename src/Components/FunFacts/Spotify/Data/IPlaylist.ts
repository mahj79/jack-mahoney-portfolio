

export interface IPlaylist {
    name: string;
    items: [{
        track: {
            href: string;
            id: string;
            name: string;
            album: {
                images: [{
                    url: string;
                    height: number;
                    width: number;
                }]
            },
            artists: [{
                name: string;
            }]
        }
    }]
}