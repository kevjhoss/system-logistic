$(function () {
    $("#example1").DataTable({
      "responsive": true, 
      "lengthChange": false,
      "autoWidth": false,
      //"dom": 'Blfrtip',
      "searching": true,
      "buttons": [
        'copy', 'excel', 'pdf', 'colvis'
      ]     
//       "initComplete": function(settings, json) {
//         alert( 'DataTables has finished its initialisation.' );
//       }
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
});
