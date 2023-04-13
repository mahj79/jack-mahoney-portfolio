

export interface IPlaylist {
    name: string;
    external_urls: {spotify: string};
    images: {
        url: string;
        height: number;
        width: number;
    } [];
    tracks: {
        href: string;
        total: number;
    };
}