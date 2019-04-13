// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "Bristol",
    about: "Taller Branding: Gráfica té verde",
}, {
    figure: "media/foto-02.jpg",
    title: "De Raíz",
    about: "Taller Calidad I: Emprendimiento Compost Chicureo Verde",
}, {
    figure: "media/foto-03.jpg",
    title: "Bolada de Cuscús Maggi",
    about: "Taller Calidad I: Proyecto Empresa Maggi",
}, {
    figure: "media/foto-04.jpg",
    title: "Dusky",
    about: "Taller Producto: Proyecto Salvavidas",
}, {
    figure: "media/foto-05.jpg",
    title: "Muslado",
    about: "Taller Producto: Proyecto Comida",
}, {
    figure: "media/foto-06.jpg",
    title: "Hit Me",
    about: "Taller Producto: Proyecto de recreación",
}, {
    figure: "media/foto-07.jpg",
    title: "Mystica",
    about: "Taller Identidad: Bebida energética natural",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
