<?php include "./view/components/Icons.php";?>
<!DOCTYPE html>
<html lang='es' dir='ltr'>
  <head>
    <?php include './view/meta.php';?>
    <link rel="stylesheet" type="text/css" href="/dist/styles/login.css">
    <title>Inicio de sesion</title>
  </head>
  <body>
    <main>
      <div class='box-login'>
        <button class='active' id='login'>Iniciar Sesion</button>
        <button id='sign-up'>Crear Cuenta</button>
        <form class='form-login'>
          <div>
            <?php echo Icons('account', '2em', 'hsl(0,0%,100%)') ?>
            <input type='text' name='user' placeholder='Ingrese su usuario...' autocomplete='off'/>
            <span class='message-error'></span>
          </div>
          <div>
            <?php echo Icons('password', '2em', 'hsl(0,0%,100%)')?>
            <input type='password' name='password' placeholder='Ingrese su contraseña' autocomplete='off'/>
            <span class='message-error'></span>
            <button type='button' id='toggle-password'>
              <?php echo Icons('show-password') ?>
            </button>
          </div>
          <button type='submit'>Ingresar</button>
        </form>
      </div>
    </main>
  </body>
</html>
