<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Envoi d'un message par formulaire</title>
</head>

<body>
    <h1>Bonjour test h1</h1>
    <?php
        var_dump($_POST);
    
        $data = array(
            "mail" => "laetitia.dwwm48@gmail.com",   // votre adresse mail
            "objet" => $_POST["sujet_name"],         // sujet du message sous le format : « NOM , DATE(JJ/MM) : [OBJET] »
            "message" => $_POST["message_name"],     // contenu du message
            "isHTML" => 'true'
        );
    
        /* $_POST[CURLOPT_POSTFIELDS] = $data; */
    
    /*     echo "</br>" ;
        echo '$_POST["objet"] : '.$_POST["objet"];
        echo "</br>" ;
        echo '$_POST["message"] : '.$_POST["message"];
        echo "</br>" ; */
    
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL,"https://script.google.com/macros/s/AKfycbwAckfTV3fZHIiWWo2Q7km9c5sYhQPn9aAd-CN8aHgo/dev");
        /* curl_setopt($ch, CURLOPT_HEADER, 0); */
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION,1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

        var_dump($data);
    
    /*     $status = curl_getinfo($ch, CURLINFO_HTTP_CODE) ;
        echo $status; */
    
        // exécution de la session
        curl_exec($ch);
    
        // fermeture des ressources
        curl_close($ch);
    

/*         echo $_POST['message_name'];
        $retour = mail('lturquois@mailoo.org', 'Envoi depuis la page Contact', $_POST['message_name'], $_POST['expediteur_name']);
        echo $retour;
        if ($retour)
            echo 'Votre message a bien été envoyé.'; */
    ?>
</body>
</html>

