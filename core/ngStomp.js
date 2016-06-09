import angular from 'angular';
import Stomp from 'stompjs';
import ngstompProvider from './provider';
import ngStompService from './stompService';

export default angular
    .module('AngularStompDK', [])
    .provider('ngstomp', ngstompProvider)
    .service('ngStompService', ngStompService)
    .constant('Stomp', Stomp);