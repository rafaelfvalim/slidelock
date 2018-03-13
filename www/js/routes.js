angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.minhasPortas', {
    url: '/portas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/minhasPortas.html',
        controller: 'minhasPortasCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('singUp', {
    url: '/singup',
    templateUrl: 'templates/singUp.html',
    controller: 'singUpCtrl'
  })

  .state('menu.porta', {
    url: '/porta',
    views: {
      'side-menu21': {
        templateUrl: 'templates/porta.html',
        controller: 'portaCtrl'
      }
    }
  })

  .state('adicionarUsuRio', {
    url: '/adduser',
    templateUrl: 'templates/adicionarUsuRio.html',
    controller: 'adicionarUsuRioCtrl'
  })

  .state('menu.adicionarPorta', {
    url: '/addPorta',
    views: {
      'side-menu21': {
        templateUrl: 'templates/adicionarPorta.html',
        controller: 'adicionarPortaCtrl'
      }
    }
  })

  .state('menu.perfil', {
    url: '/perfil',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/portas')


});