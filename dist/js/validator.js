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
    errorPlacement: function(error, element) {
      error.addClass('invalid-feedback');
      element.closest('.form-group').append(error);
    },
    highlight: function(element) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function(element) {
      $(element).removeClass('is-invalid');
      $(element).addClass('is-valid');
    },
    submitHandler: function(form) {
      let datos = $(form).serializeArray();
      $.ajax({
        method: $(form).attr('method'),
        data: datos,
        url: 'index.php?controller=Users&action=create',
        dataType: 'json',
        async: false,
        success: function(data) {
          console.log(data);
          let result = data[0];
          console.log(typeof (result[0]));
          if (result[0]) {
            Toast.fire({
              icon: 'success',
              title: 'Success',
              text: 'El susuario se registro correctamente'
            }).then(function() {
              window.location = 'index.php?controller=Users&action=index';
            })

          } else {
            Toast.fire({
              icon: 'error',
              title: 'Error',
              text: 'El email ya existe, por favor ingrese otro email'
            })
          }
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
    errorPlacement: function(error, element) {
      error.addClass('invalid-feedback');
      element.closest('.input-group').append(error);
    },
    highlight: function(element) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function(element) {
      $(element).removeClass('is-invalid');
      $(element).addClass('is-valid');
    },
    submitHandler: (form) => {
      const sendInfo = async () => {
        const dataForm = new FormData(form);
        const datas = await fetch("index.php?controller=Login&action=login", {
          method: "POST",
          body: dataForm
        });
        const data = await datas.text();
        const result = JSON.parse(data.slice(data.search(/{"/)));
        if (result.status == "ok") {
          const value = await Toast.fire({
            icon: 'success',
            title: 'Success',
            text: 'Bienvenid@ ' + result.result[0].name + ' !!!'
          });
          console.log(value);
          if (value) window.location = "index.php?controller=Index&action=index";
        };

        if (result.status == "passBad") {
          Toast.fire({
            icon: 'error',
            title: 'Error',
            text: 'Password incorrecto'
          });
        };

        if (result.status == "emailBad") {
          Toast.fire({
            icon: 'error',
            title: 'Error',
            text: 'Email no existe'
          });
        };
      };
      sendInfo();
    }
  })

  const elements = document.querySelectorAll(".delete");
  for (const element of elements) {
    element.addEventListener("click", async e => {
      e.preventDefault();
      const result = await Swal.fire({
        icon: 'question',
        title: '¿Quiere borrar el registro?',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      });

      if (result.isConfirmed) {
        const id = new FormData();
        id.append("id", element.dataset.id);
        const data = await fetch("index.php?controller=Users&action=delete", {
          method: "POST",
          body: id
        });
        const value = await data.text();

        if (value) {
          const result = await Toast.fire({
            icon: 'success',
            cancelButtonText: 'Cancelar',
            title: 'Se eliminado correctamente el registro ' + element.dataset.id
          });
          if (result.isDismissed) window.location = 'index.php?controller=Users&action=index';
        }
      }
    })
  }
});
