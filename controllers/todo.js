export const createTodo = () => {
    Todo.create({
        task: req.body.task,
        description: req.body.description,
        date: req.body.date
        }, function(err, newtodo){
        if(err){console.log('error in creating task', err); return;}
        
          return res.redirect('back');

    });

}