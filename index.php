<?php 

require_once "db.php";

$articles = $db->query('SELECT * FROM books LIMIT 6')->fetchAll(PDO::FETCH_ASSOC);

?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Книги</title>
</head>
<body>
	<style>
		.container{
			max-width: 900px;
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;
		}
		.article{
			max-width: calc(900px / 3);
			text-align: center;
		}
		img{
			width: 100%;
			height: 473px;
			object-fit: cover;
		}
		.article > p{
			margin: 0;
		}
	</style>
	<div class="container">
		<?php foreach ($articles as $article): ?>
			<div class="article">
				<img src="<?= $article['img'] ?>" alt="<?= $article['title'] ?>">
				<p class="author"><?= $article['author'] ?></p>
				<p class="title"><?= $article['title'] ?></p>
			</div>
		<?php endforeach ?>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
	<script>
		var startForm = 6;
		var proccess = false;

		$(window).on('scroll', function(){
			if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100 
				&& !proccess){
				$.ajax({
					url: "ajax.items.php",
					method: "POST",
					data: {
						"start" : startForm
					},
					beforeSend: function(){
						//перед отправкой запроса
						proccess = true;
					}
				}).done(function(data){
					data = JSON.parse(data);
					if (data.length > 0){
						$.each(data, function(index, data){
							$('.container').append('<div class="article">' + 
								'<img src="' + data.img + '" alt="' + data.title +  '">' + 
								'<p class="author">' + data.author + '</p>' + 
								'<p class="title">' + data.title + '</p>' + 
								'</div>');
						});
						proccess = false;
						startForm += 3;
					}
				});
			}
		});

	</script>
</body>
</html>