$(document).ready(function () {
  // Carga el contenido de nav.html en nav#sidebar
  $("#sidebar").load("nav.html", function () {
    // Añade la clase "active" al enlace correspondiente
    var currentFile = window.location.pathname.split("/").pop();
    $("#sidebar a[href='" + currentFile + "']").addClass("active");
  });

  // Muestra/oculta la solución
  $(".toggle-btn").on("click", function () {
    $(this).next(".solution").slideToggle();
  });
});
