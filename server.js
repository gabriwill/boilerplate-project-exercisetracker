const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});
//------------------------------------------------------------------------------------------------------------
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(function (e) { console.log('conectou');})
  .catch(function (e) { console.error(e);});

const { Schema } = mongoose;
const userSchema = new Schema({
  username: String,
  exercise:[{
    description: String,
    duration: Number,
    date: {type: Date, default: Date.now()}
  }]
});
const User = mongoose.model('Users',userSchema);

app.get('/api/users',(req,res,next)=>{
  User.find({},'_id username',(err, docs)=>{
    res.json(docs);
  });
});
app.post('/api/users',(req,res,next)=>{
  if(typeof req.body.username == 'string'){
    next();
  }
},(req,res,next)=>{
  User.findOne({username: req.body.username},(err, data)=>{
    if (err) return console.error(err);
    if(data) return res.json({username:data.username, _id: data._id});
    next();
  });
},(req,res,next)=>{
  const newUser = new User({username: req.body.username});
  newUser.save((err, data)=>{
    if (err) return console.error(err);
    return res.json({username:data.username, _id: data._id});
  });
});

app.post('/api/users/:_id/exercises',(req,res,next)=>{
  User.findById(req.params._id,(err, data)=>{
    if (err) return console.error(err);
    if(data){
      const newExercise = {
        description: req.body.description,
        duration: req.body.duration,
        date: req.body.date ? new Date(req.body.date) : new Date()
      };
      data.exercise.push(newExercise);
      data.save((err, doc)=>{
        if (err) return console.error(err);
        let user = {
          username: doc.username,
          _id:doc._id.toString(),
          description: newExercise.description,
          duration: Number(newExercise.duration),
          date: newExercise.date.toDateString()
        };
        res.json(user);
      });
    }
  });
});

app.get('/api/users/:_id/logs', (req,res,next)=>{
  User.findById(req.params._id,(err, data)=>{
    if (err) return console.error(err);
    if(data){
      req.userData = data;
      next();
    }
  });
}, (req,res,next)=>{
  const exercises = req.userData.exercise.sort((a, b)=>{
    return b.date - a.date;
  }).filter((e)=>{
    const _from = new Date(req.query.from || 0);
    const _to = req.body.to ? new Date(req.body.to) : new Date();

    if(e.date >= _from && e.date <= _to) return true;
    return false;
  }).slice(0,req.query.limit ? Number(req.query.limit) : undefined);
  
  res.json({
    count:  exercises.length,
    log: exercises
  });
});

//--------------------------------------------------------------------------------
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
