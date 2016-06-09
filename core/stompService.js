import ngStompWebSocket from './service';

export default class ngstompService {



    constructor($q, $log, $rootScope, $timeout, Stomp) {
        "ngInject";

        this.$q = $q;
        this.$log = $log;
        this.$rootScope = $rootScope;
        this.$timeout = $timeout;
        this.Stomp = Stomp;

        this.settings = {
            timeOut : 5000,
            heartbeat : {
                outgoing : 10000,
                incoming : 10000
            }
        };
    }

    credential(login, password) {
        this.settings.login = login;
        this.settings.password = password;
        return this;
    }

    url(url) {
        this.settings.url = url;
        return this;
    }

    class(clazz) {
        this.settings.class = clazz;
        return this;
    }

    setting(settingsObject) {
        this.settings = settingsObject;
        return this;
    }

    debug(boolean) {
        this.settings.debug = boolean;
        return this;
    }

    vhost(host) {
        this.settings.vhost = host;
        return this;
    }

    reconnectAfter(numberInSeconds) {
        this.settings.timeOut = numberInSeconds * 1000;
        return this;
    }

    heartbeat(outgoing, incoming) {
        this.settings.heartbeat.outgoing = outgoing;
        this.settings.heartbeat.incoming = incoming;
        return this;
    }


    get() {
        return new ngStompWebSocket(this.settings, this.$q, this.$log, this.$rootScope, this.$timeout, this.Stomp);
    }
}


