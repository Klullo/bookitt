(function(){
    'use strict';

    angular
        .module('app')
        .controller('AppointmentController', AppointmentController)

    AppointmentController.$inject = ['appointmentFactory'];

    function AppointmentController(appointmentFactory) {
        
        var vm = this;
        
        vm.name = 'Keaton Lullo';

        vm.test = "HEY THERE";

    }
})();