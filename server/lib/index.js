import Express from 'express';
import BodyParser from 'body-parser';
import path from 'path';

//React deps
import React from 'react';
import { renderToString } from 'react-dom/server';
import HelloWord from '../../front/components/HelloWorld.jsx';


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
    const reactApp = React.createFactory(HelloWord);
    const generated = renderToString(reactApp());

    res.render('index',{generated : generated});
});



//server listen
server.listen(PORT, ()=>console.log(`Server listening : localhost: ${PORT}`));