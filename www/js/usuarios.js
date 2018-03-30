angular.module('app.usuarios', ['firebase'])
    
    .service('Usuarios', ['$firebaseArray', function ($firebaseArray) {
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
        var ref = firebase.database().ref().child("usuarios");
        var usuarios = $firebaseArray(ref);
        var usuarios = {
            'usuarios': usuarios
        }
        return usuarios;
    }]);