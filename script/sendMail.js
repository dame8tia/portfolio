function recuperation()
{
    document.getElementById('form').action = "mailto:lturquois@mailo.org?subject=" + document.getElementById('id_sujet').value + "&body="+document.getElementById('id_description').value;
}