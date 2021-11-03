<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="{{url('validar')}}" method="POST">
         <label for="Usuario">Usuario</label>
            <input type="text" name="usuario" placeholder="Usuario"><br>
            {{csrf_field()}}
        <label for="Password">Contraseña</label>
            <input type="password" name="password">
    <br>
    <br>
        <button type="submit">INGRESAR</button>
    </form>
</body>
</html>