﻿module MusicStore.Controllers {

    export class CreateAlbumController {
        private album: MusicStore.Models.Album;
        private artists: MusicStore.Models.Artist[];
        private genres: MusicStore.Models.Genre[];

        constructor(
            private $location: ng.ILocationService,
            private $window: ng.IWindowService,
            private albumService: MusicStore.Services.AlbumService,
            private artistService: MusicStore.Services.ArtistService,
            private genreService: MusicStore.Services.GenreService) {

            this.initialize();
        }

        public saveAlbum() {
            this.albumService.saveAlbum(this.album).then(() => {
                this.$window.location.href = "#/StoreManager";
            }, (error) => {
                console.log(error);
            });
        }

        public initialize() {
            this.genreService.getGenres().then(genres => {
                this.genres = genres;
            }, (error) => {
                    console.log(error);
                });

            this.artistService.getArtists().then(response => {
                this.artists = response;
            },
            (error) => {
                console.log(error);
            });
        }
    }

    angular.module('musicStoreApp')
        .controller('CreateAlbumController', [
            '$location',
            '$window',
            'AlbumService',
            'ArtistService',  
            'GenreService',
            CreateAlbumController
        ]);
}