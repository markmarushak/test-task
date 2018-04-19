<?php 

if(!empty($_POST))
{
    return [
        'name' => $_POST['name'],
        'date' => $_POST['date'],
        'text' => $_POST['text']
    ];
}