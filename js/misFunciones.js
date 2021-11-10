function traerInformaciontool(){
    

    $.ajax({
        url: "https://g04f48da1d62386-db202111032032.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/tool/tool",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        console.log(respuesta);
        pintarRespuestatool(respuesta.items);
        }

    });
}

function pintarRespuestatool(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>  <button onclick= 'borrarElementotool("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadotool").append(myTable);

};
function guardarInformaciontool (){ 
    let myData={
        id:$("#idtool").val (),
        brand:$("#brand").val (),
        model:$("#model").val (),
        category_id:$("#category_id").val (),
        name:$("#name").val (),
        
};
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://g04f48da1d62386-db202111032032.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/tool/tool",
        type:"POST",
        data: myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadotool").empty();
            $("#idtool").val(null);
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformaciontool();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformaciontool(){ 
    let myData={
        id:$("#idtool").val (),
        brand:$("#brand").val (),
        model:$("#model").val (),
        category_id:$("#category_id").val (),
        name:$("#name").val (),

    };
console.log(myData);
let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://g04f48da1d62386-db202111032032.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/tool/tool",
        type:"PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadotool").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformaciontool();
            alert("se ha Actualizado")
        }  
    });    
}

function borrarElementotool(idElemento){
        let myData={
            id:idElemento
        };
        let dataToSend=JSON.stringify(myData);
        $.ajax({
            url: "https://g04f48da1d62386-db202111032032.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/tool/tool",
            type:"DELETE",
            data: dataToSend,
            contentType: "application/JSON",
            datatype:"JSON",
        success:function(respuesta){
            $("#resultadotool").empty();
            traerInformaciontool();
            alert("se ha Eliminado")
        }
    });
}


function traerInformacionclient(){
    $.ajax({
        url: "https://g04f48da1d62386-db202111032032.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        console.log(respuesta);
        pintarRespuestaclient(respuesta.items);
        }

    });
}

function pintarRespuestaclient(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td>  <button onclick= 'borrarElementoclient ("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoclient").append(myTable);

};
function guardarInformacionclient(){ 
    let myData={
        id:$("#idclient").val (),
        name:$("#nameclient").val (),
        email:$("#email").val (),
        age:$("#age").val (),
};
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://g04f48da1d62386-db202111032032.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data: myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoclient").empty();
            $("#idclient").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionclient();
            alert("se ha guardado el dato")
        }
    });
}
function editarInformacionclient(){ 
    let myData={
        id:$("#idclient").val (),
        name:$("#nameclient").val (),
        email:$("#email").val (),
        age:$("#age").val (),
    };
console.log(myData);
let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://g04f48da1d62386-db202111032032.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoclient").empty();
            $("#idclient").val("");
            $("#nameclient").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionclient();
            alert("se ha Actualizado")
        }  
    });    
}

function borrarElementoclient(idElemento){
        let myData={
            id:idElemento
        };
        let dataToSend=JSON.stringify(myData);
        $.ajax({
            url: "https://g04f48da1d62386-db202111032032.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
            type:"DELETE",
            data: dataToSend,
            contentType: "application/JSON",
            datatype:"JSON",
        success:function(respuesta){
            $("#resultadoclient").empty();
            traerInformacionclient();
            alert("se ha Eliminado")
        }
    });
}


///message

function traerInformacionmessage(){
    $.ajax({
        url: "https://g04f48da1d62386-db202111032032.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        console.log(respuesta);
        pintarRespuestamessage(respuesta.items);
        }

    });
}

function pintarRespuestamessage(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td>  <button onclick= 'borrarElementomessage ("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadomessage").append(myTable);

};

function guardarInformacionmessage(){ 
    let myData={
        id:$("#idmessage").val (),
        messagetext:$("#messagetext").val (),
        
};
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://g04f48da1d62386-db202111032032.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data: myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadomessage").empty();
            $("#idmessage").val("");
            $("#messagetext").val("");
            traerInformacionmessage();
            alert("se ha guardado el dato")
        }
    });
}

function editarInformacionmessage(){ 
    let myData={
        id:$("#idmessage").val (),
        messagetext:$("#messagetext").val (),

    };
console.log(myData);
let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://g04f48da1d62386-db202111032032.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadomessage").empty();
            $("#idmessage").val("");
            $("#messagetext").val("");
            traerInformacionmessage();
            alert("se ha Actualizado")
        }  
    });    
}

function borrarElementomessage(idElemento){
        let myData={
            id:idElemento
        };
        let dataToSend=JSON.stringify(myData);
        $.ajax({
            url: "https://g04f48da1d62386-db202111032032.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
            type:"DELETE",
            data: dataToSend,
            contentType: "application/JSON",
            datatype:"JSON",
            success:function(respuesta){
                $("#resultadomessage").empty();
                traerInformacionmessage();
                alert("se ha Eliminado")
        }
    });
}
