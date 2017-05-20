module.exports={
    getProfile(req,res){
        let data={
            username: 'johadi',
            fullname: 'jimoh hadi',
            age: 20,
            email: 'jim.hadi@gmail.com',
            phone: '08163041269'
        }
        res.status(200).json(data);
    },
    postProfile(req,res){
        if(!req.body.name || !req.body.age){
            return res.status(400).send('Oops! Bad request');
        }

        res.status(200).json({name: req.body.name,age: req.body.age});
    }
}
