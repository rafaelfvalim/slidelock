angular.module('app.portas', ['firebase'])
    .run(function () {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyDxpbL9Jm1O0lnSGecylsExRUVZJrJ7HMA",
            authDomain: "portas-26aa6.firebaseapp.com",
            databaseURL: "https://portas-26aa6.firebaseio.com",
            projectId: "portas-26aa6",
            storageBucket: "portas-26aa6.appspot.com",
            messagingSenderId: "447999957176"
        };
        firebase.initializeApp(config);
    })
    .service('Portas', ['$firebaseArray', function ($firebaseArray) {

        // var portas = [
        //     {
        //         '$id': 1,
        //         'chave': '1111111',
        //         'nome': 'Casa',
        //         'img': 'img/P04cglCRT6yindNRC0lQ_porta1.jpg'
        //     },
        //     {
        //         '$id': 2,
        //         'chave': '1111111',
        //         'nome': 'Trabalho',
        //         'img': 'img/P04cglCRT6yindNRC0lQ_porta1.jpg'
        //     },
        //     {
        //         '$id': 3,
        //         'chave': '1111111',
        //         'nome': 'Apartamento',
        //         'img': 'img/P04cglCRT6yindNRC0lQ_porta1.jpg'
        //     },
        //     {
        //         '$id': 4,
        //         'chave': '1111111',
        //         'nome': 'Mãe',
        //         'img': 'img/P04cglCRT6yindNRC0lQ_porta1.jpg'
        //     }
        // ];]
        var ref = firebase.database().ref().child("portas");
        var portas = $firebaseArray(ref);
        var portas = {
            'portas': portas,
            adicionarPorta: function (nome, chave, img) {
                portas.$add({
                    'nome':nome,
                    'chave': chave,
                    'img' : img
                });
            }
        }
        return portas;
    }]);