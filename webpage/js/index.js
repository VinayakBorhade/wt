function changeContent(option){
    console.log("option clicked: ", option)
    if(option==5){
        document.getElementById("body_data").innerHTML=
        '<object type="text/html" data="../loginForm.html" style=width:100%;height:100%></object>'
    }
    else if(option==4){
        document.getElementById("body_data").innerHTML=
        '<article style="padding:10px;">'
        +'<h1>Google Chrome</h1>'
        +'<p>Google Chrome is a free, open-source web browser developed by Google, released in 2008.'
        +'Google Chrome is a free, open-source web browser developed by Google, released in 2008.'
        +'Google Chrome is a free, open-source web browser developed by Google, released in 2008.'
        +'Google Chrome is a free, open-source web browser developed by Google, released in 2008.'
        +'Google Chrome is a free, open-source web browser developed by Google, released in 2008.'
        +'Google Chrome is a free, open-source web browser developed by Google, released in 2008.</p>'
        +'</article>';
    }
    else if(option==2){
        document.getElementById("body_data").innerHTML=
        '<table id="reg_table">'
        +'<tr><th>Firstname</th><th>Lastname</th><th>Age</th></tr>'
        +'<tr><td>Jill</td><td>Smith</td><td>50</td></tr>'
        +'<tr><td>Jill</td><td>Smith</td><td>50</td></tr>'
        +'<tr><td>Jill</td><td>Smith</td><td>50</td></tr>'
        +'<tr><td>Jill</td><td>Smith</td><td>50</td></tr>'
        +'<tr><td>Jill</td><td>Smith</td><td>50</td></tr>'
        +'</table>';
    }
    else if(option==3){
        document.getElementById("body_data").innerHTML=
        '<object type="text/html" data="../colorPicker.html" style=width:100%;height:100%></object>'
    }
}