$(document).ready(function() {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
    
    $('#userForm').validate({
      rules: {
        name: {
            required: true,
            minlength: 2,
            maxlength: 30,
        },
        lastname: {
            required: true,
            minlength: 2,
            maxlength: 30,
        },
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 5
        },
      },
      messages: {
        name: {
            required: "Por favor ingrese su nombre",
            minlength: "Su nombre debe contener como minimo dos(2) caracteres",
            maxlength: "Su nombre debe contener como maximo treinta(30) caracteres",
        },
        lastname: {
            required: "Por favor ingrese su apellido",
            minlength: "Su apellido debe contener como minimo dos(2) caracteres",
            maxlength: "Su apellido debe contener como maximo treinta(30) caracteres",
        },
        email: {
          required: "Por favor ingrese su email",
          email: "Por favor ingrese un email valido"
        },
        password: {
          required: "Por favor ingrese su password",
          minlength: "Su password debe contener como minimo cinco(5) caracteres"
        }
      },
      errorElement: 'span',
      errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
        $(element).addClass('is-valid');
      },
      submitHandler: function (form) {
        var datos = $(form).serializeArray();
        //console.log(datos);
        //alert( "Form successful submitted!" );
        //form.submit();
        

        $.ajax({
          method: $(form).attr('method'),
          data: datos,
          url: 'index.php?controller=Users&action=create',
          dataType: 'json',
          async: false,
          success: function(data) {
            console.log(data);
            var result = data[0];
            console.log(typeof(result[0]));
            if (result[0]) {
               Toast.fire({
                icon: 'success',
                title: 'Success',
                text: 'El susuario se registro correctamente'
              }).then(function(){
                  window.location = 'index.php?controller=Users&action=index';
              })
              
            } else {
              Toast.fire({
                icon: 'error',
                title: 'Error',
                text: 'El email ya existe, por favor ingrese otro email'
              })
            }

            //window.location = 'index.php?controller=Users&action=index';
            
          }
        })
      }
    })


    $('#login').validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 5
        },
      },
      messages: {
        email: {
          required: "Por favor ingrese su email",
          email: "Por favor ingrese un email valido"
        },
        password: {
          required: "Por favor ingrese su password",
          minlength: "Su password debe contener como minimo cinco(5) caracteres"
        }
      },
      errorElement: 'span',
      errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.input-group').append(error);
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
        $(element).addClass('is-valid');
      },
      submitHandler: function (form) {
        var datos = $(form).serializeArray();
        //console.log(datos);
        //alert( "Form successful submitted!" );
        //form.submit();
        

        $.ajax({
          method: $(form).attr('method'),
          data: datos,
          url: 'index.php?controller=Login&action=login',
          dataType: 'html' || 'json',
          async: false,
          success: function(data) {
            const json = data.slice(data.search(/{"/))
            console.log(JSON.parse(json));
            var result = JSON.parse(json);
            console.log(typeof(result));
            if (result.status == "ok") {
               Toast.fire({
                icon: 'success',
                title: 'Success',
                text: 'Bienvenid@ '+result.result[0].name+' !!!'
              }).then(function(){
                  window.location = 'index.php?controller=Index&action=index';
              })
              
            } else if(result.status == "passBad") {
              Toast.fire({
                icon: 'error',
                title: 'Error',
                text: 'Password incorrecto'
              })
            } else if(result.status !== "emailBad") {
              Toast.fire({
                icon: 'error',
                title: 'Error',
                text: 'Email no existe'
              })
            }

            
          }
        })
      }

    })

    $(".delete").on('click', function(e){
      e.preventDefault();
      var id = $(this).attr('data-id');
      var controller = $(this).attr('data-controller');
      Swal.fire({
        icon: 'question',
        title: '¿Quiere borrar el registro?',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if(result.isConfirmed) {
          $.ajax({
            type: 'post',
            dataType: 'json',
            url: "index.php?controller="+controller+"&action=delete",
            data: {id: id},
            success: function(){
              Toast.fire({
                icon: 'success',
                cancelButtonText: 'Cancelar',
                title: 'Se eliminado correctamente el registro ' + id
              }).then(function(){
                window.location = 'index.php?controller=Users&action=index';
            })
            }
          })
        }  
      })
    })
    


});
