<?php include "./view/components/Icons.php";?>
<nav>
  <?php echo Icons('logo', '3em', 'hsl(0,0%,100%)')?>
  <ul>
    <li class='active-link'>
      <a href="index.php?controller=User&action=panel" class='panel' >
        <?php echo Icons('home', '1em', 'hsl(0,0%,100%)')?>
        Inicio
      </a>
    </li>
    <li>
      <a href="index.php?controller=User&action=envio" class='envio'>
        Nuevo Envio
        <?php echo Icons('arrow-down', '1em', 'hsl(0,0%,100%)')?>
      </a>
    </li>
    <li>
      <a href="index.php?controller=User&action=mis_envios" class='misenvios'>
        Mis Envios
        <?php echo Icons('arrow-down', '1em', 'hsl(0,0%,100%)')?>
      </a>
    </li>
    <li>
      <a href="index.php?controller=User&action=cuenta" class='cuenta'>
        <?php echo Icons('account', '1em', 'hsl(0,0%,100%)')?>
        Mi Cuenta
      </a>
    </li>
  </ul>
</nav>
