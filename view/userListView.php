<?php include './view/headerTemplate.php';?>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Usuarios</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="index.php?controller=Users&action=index">Usuarios</a></li>
              <li class="breadcrumb-item active">Lista</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">

      <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Lista de Usuarios</h3>

          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i class="fas fa-minus"></i>
            </button>
            <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="card-body">
            <table id="example1" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Accion</th>
                  </tr>
                  </thead>
                  <tbody>
                  <?php foreach($allusers as $user) { //recorremos el array de objetos y obtenemos el valor de las propiedades '> ?>
                       <tr>
                       <td><?php echo $user->id; ?></td>
                       <td><?php echo $user->name; ?></td>
                       <td><?php echo $user->lastname; ?></td>
                       <td><?php echo $user->email; ?></td>
                       <td>
                        <!-- <a id="deleteUser" href="<?php echo $helper->url("Users","delete"); ?>&id=<?php echo $user->id; ?>" class="btn btn-danger"><i class="fa-regular fa-trash-can"></i></a> -->
                        <a id="delete" href="#" data-id="<?php echo $user->id; ?>" data-controller="Users" class="btn btn-danger delete"><i class="fa-regular fa-trash-can"></i></a>
                        <a id="update" href="#" data-id="<?php echo $user->id; ?>" data-name="<?php echo $user->name; ?>" data-lastname="<?php echo $user->lastname; ?>" 
                        data-email="<?php echo $user->email; ?>" data-password="<?php echo $user->password; ?>" data-controller="Users"class="btn btn-warning update"><i class="fa-regular fa-pen-to-square"></i></a>
                      </td>
                           
                        <?php }?>
                    
                  </tbody>
                  <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Accion</th>
                  </tr>
                  </tfoot>
            </table>
        </div>
        <!-- /.card-body -->
        <div class="card-footer">
          
        </div>
        <!-- /.card-footer-->
      </div>
      <!-- /.card -->

    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
<?php include './view/footerTemplate.php';?>
