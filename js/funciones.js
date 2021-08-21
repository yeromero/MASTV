
var funciones = {
    accion: function(){

        $('.slider').bxSlider({
            captions: true,
            infiniteLoop:true,
            adaptiveHeight:true,
            responsive:true,
            auto:true
        })

        $(".mini").click(function (e) { 
            e.preventDefault();
            
        });

        $(".mini").accordion();
    }
}


$(document).ready(funciones.accion);