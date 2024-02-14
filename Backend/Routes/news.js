const express = require('express')
const axios = require('axios')
const newsr = express.Router()
const { summarizeContent } = require('./Openai.route');



newsr.get('/',async(req,res) => {
	try {
		var url = `http://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_API_KEY}`;

        const news_get = await axios.get(url)
        let articles = news_get.data.articles.slice(0,2);

        for (let i = 0; i < articles.length; i++) {
            const articleUrl = articles[i].url;
            const summary = await summarizeContent(articleUrl);
            articles[i].content = summary;
        }
        res.send(articles);
        
	} catch (error) {
		if(error.response) {
			console.log(error)
		}
	}
})


module.exports = newsr;