module.exports={
    getProfile(req,res){
        let data={
            username: 'johadi',
            fullname: 'jimoh hadi',
            age: 36,
            email: 'jim.hadi@gmail.com',
            phone: '08163041269'
        }
        res.status(200).json(data);
    },
    postProfile(req,res){
        if(!req.body.username || req.body.email){
            return res.status(400).send('Oops! Bad request');
        }

        res.status(200).json({username: req.body.username,email: req.body.email});
    }
}
