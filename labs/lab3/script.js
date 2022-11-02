function myalert()
{
    var myvariable = document.getElementById("saysomething").value;
    if (myvariable > "") {
        window.alert(myvariable);
    } else {
        window.alert("You don't like ice-cream?");
    }
}
