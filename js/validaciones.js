
function validarNombre(name)
{
    if(name.length >= 3 && name.length <= 20)
    {
        return true;
    }
    return false;
}

function validarApellidos(apellidos)
{
    if(apellidos.length >=3 && apellidos.length <=20)
    {
        return true;
    }
}  

function validarFechaNacimiento(fecha_nacimiento)
{
    if(fecha_nacimiento !="")
    {
        return true;
    }
    return false;
} 

function validarEdad(edad)
{
    if(edad >=18 &&  edad<=110)
    {
        return true;
    }
}  


function validarMensaje(mensaje)
{
    if(mensaje !="")
    {
        return true;
    }
    return false;
} 

function validarCorreo(email)
{
    if(email !="")
    {
        return true;
    }
    return false;
} 

function validarCelular(celular)
{
    if(celular.length >=9 && celular.length <=12)
    {
        return true;
    }
}  

/*validaciones de publicarObra */
function validarNombreObra(nombreobra)
{
    if(nombreobra.length >= 1 && nombreobra.length <= 40)
    {
        return true;
    }
    return false;
}

function validarDescripcion(descripcion)
{
    if(descripcion !="")
    {
        return true;
    }
    return false;
} 

function validarHitoria(hitoria)
{
    if(hitoria !="")
    {
        return true;
    }
    return false;
} 

function validarTipoTecnica(tipotecnica)
{
    if(tipotecnica !="")
    {
        return true;
    }
    return false;
} 

function validarPrecio(precio)
{
    if(precio !="")
    {
        return true;
    }
    return false;
}  

/*validaciones de crearUsuario */
function validarCrearUsuario(crearusuario)
{
    if(crearusuario !="")
    {
        return true;
    }
    return false;
}  

function validarContraseña(password)
{
    if(password !="")
    {
        return true;
    }
    return false;
}  