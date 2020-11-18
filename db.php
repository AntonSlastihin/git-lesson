<?php
    try {
        $db = new PDO('mysql:host=localhost;dbname=bd', 'anton', 'mamochka71');

    } catch (PDOException $e){
        print "Ошибка: {$e->getMessage()}";
    }
    

