var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost/players')

app.use(express.static(path.join(__dirname, '/public/dist')));
app.use(bodyParser.json());

// var NoteSchema = new mongoose.Schema({
// 	note: String
// },{timestamps: true});

// mongoose.model('Note', NoteSchema);

// var Note = mongoose.model('Note');

var PlayerSchema = new mongoose.Schema({
	name: String,
	position: String,
	status: [Number]
}, {timestamps:true});

mongoose.model('Player', PlayerSchema);

var Player = mongoose.model('Player');

app.post('/api/players/add', function(req, res){
	console.log(req.body);
	var newPlayer = new Player(req.body);
	newPlayer.save((err, player)=>{
		if(err){
			console.log('in /api/players route on server');
			console.log('failed to post a player');
			console.log(err);
		}
		else{
			console.log('in /api/players route on server');
			console.log('successfully posted player');
			res.json(true);
		}
	})
})

app.get('/api/players/show', function(req, res){
	console.log('in server showing')
	Player.find({}, function(err, players){
		if(err){
			console.log(err);
		}
		else{
			res.json(players);
		}
	})
})

app.post('/api/players/delete', function(req, res){
	console.log('in server. attempting to delete');
	console.log(req.body.id);
	Player.remove({_id: req.body.id}, function(err){
		if(err){
			console.log(err);
		}
		else{
			res.json(true);
		}
	})
})

app.post('/api/players/edit', function(req, res){
	console.log(req.body);
	// Player.findById(req.body.id, function(err, player){
	// 	if(err){
	// 		console.log('error finding player in server');
	// 		console.log(err);
	// 	}
	// 	else{
	// 		// temp[req.body.game - 1] = req.body.newStatus;


	// 		// player.status = [0,0,0];
	// 		console.log('this is the playerz status ***************')
	// 		console.log(player.status);
	// 		player.status.0 = 1;
	// 		// player.status = [1,0,0];

	// 		player.save(function(err){
	// 			if(err){
	// 				console.log('error updating player');
	// 				console.log(err);
	// 			}
	// 			else{
	// 				console.log('saved player');
	// 				console.log(player)
	// 				res.json(true);
	// 			}
	// 		})


	// 	}
	// })
	var gameIndex = req.body.game - 1;
	
	if(gameIndex == 0){
		Player.update({_id: req.body.id}, {$set:{"status.0":req.body.newStatus}}, function(err){
			if(err){
				console.log('couldnt save');
			}
			else{
				res.json(true);
			}
		})
	}
	else if(gameIndex == 1){
		Player.update({_id: req.body.id}, {$set:{"status.1":req.body.newStatus}}, function(err){
			if(err){
				console.log('couldnt save');
			}
			else{
				res.json(true);
			}
		})
	}
	else if(gameIndex == 2){
		Player.update({_id: req.body.id}, {$set:{"status.2":req.body.newStatus}}, function(err){
			if(err){
				console.log('couldnt save');
			}
			else{
				res.json(true);
			}
		})
	}

		




})


app.all("*", (req,res,next)=>{
	res.sendFile(path.resolve("./public/dist/index.html"));
})


app.listen(8000, function(){
	console.log('listening at port 8000');
})