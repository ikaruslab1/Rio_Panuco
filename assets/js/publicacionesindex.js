
let output_HTML = "";
let publicacionesindex = publicaciones.reverse()

for (let i = 0; i < publicacionesindex.length; i++) {
    output_HTML += '<a href="' + publicacionesindex[i].URL;
    output_HTML += '" target="_blank" class="publicacioncarta col-sm-12 col-md-6 col-xxl-4">';
    output_HTML += '<div>';
    output_HTML += '<img src="' + publicacionesindex[i].Imgamen + '" alt="">';
    output_HTML += '</div>';
    output_HTML += '<div>';
    output_HTML += '<h4>';
    output_HTML += publicacionesindex[i].Titulo;
    output_HTML += '</h4>';
    output_HTML += '<p>';
    output_HTML += publicacionesindex[i].Descripcion;
    output_HTML += '</p>';
    output_HTML += '<p class="caption">';
    output_HTML += publicacionesindex[i].Fecha;
    output_HTML += '</p>';
    output_HTML += '</div>';
    output_HTML += '</a>';
}

document.getElementById('output_div').innerHTML = output_HTML;