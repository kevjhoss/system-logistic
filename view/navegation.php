<?php include "./view/components/Icons.php";?>
<nav>
  <?php echo Icons('logo', '3em', 'hsl(0,0%,100%)')?>
  <ul>
    <li class='active-link'>
      <a href="index.php?controller=User&action=panel" class='panel' >
        <?php echo Icons('home', '1em', 'hsl(0,0%,100%)')?>
        Panel
      </a>
    </li>
    <li>
      <a href="index.php?controller=User&action=envio" class='envio'>
        Envio
        <?php echo Icons('arrow-down', '1em', 'hsl(0,0%,100%)')?>
      </a>
    </li>
    <li>
      <a href="index.php?controller=User&action=mis_envios" class='misenvios'>
        Mis envios
        <?php echo Icons('arrow-down', '1em', 'hsl(0,0%,100%)')?>
      </a>
    </li>
    <li>
      <a href="index.php?controller=User&action=cuenta" class='cuenta'>
        <?php echo Icons('account', '1em', 'hsl(0,0%,100%)')?>
        Cuenta
      </a>
    </li>
  </ul>
</nav>
