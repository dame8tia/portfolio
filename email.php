<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Envoi d'un message par formulaire</title>
</head>

<body>
    <h1>Bonjour test h1</h1>
    <?php
        echo $_POST['message_name'];
        $retour = mail('lturquois@mailoo.org', 'Envoi depuis la page Contact', $_POST['message_name'], $_POST['expediteur_name']);
        echo $retour;
        if ($retour)
            echo 'Votre message a bien été envoyé.';
    ?>
</body>
</html>

