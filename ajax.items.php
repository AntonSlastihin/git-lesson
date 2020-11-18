<?php 
    require_once "db.php";
    if (isset($_POST['start']) && is_numeric($_POST['start'])){
        $start = $_POST['start'];
        $stmt = $db->query("SELECT * FROM books LIMIT $start, 3");
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    echo json_encode($rows ?? array());