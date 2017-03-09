import Express from 'express';
import BodyParser from 'body-parser';
import path from 'path';


const PORT = process.env.PORT || 3000;
const server = new Express();

//setting up body-parser
server.use(BodyParser.json());
server.use(BodyParser.urlencoded({extended: false}));

//setting up view
server.set('views', path.join('front','views'));
server.set('view engine','ejs');

//setting up static folder
server.use(Express.static(path.join('front','static')));

server.get('/', (req,res)=>{
    res.render('index', {message: 'hello world'});
});



//server listen
server.listen(PORT, ()=>console.log(`Server listening : localhost: ${PORT}`));