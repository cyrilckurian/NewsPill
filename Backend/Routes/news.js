const express = require('express')
const axios = require('axios')
const newsr = express.Router()


newsr.get('/',async(req,res) => {
	try {
		var url = `http://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_API_KEY}`;

		const news_get = await axios.get(url)
		//res.send(news_get.data.articles)
        const articles = news_get.data.articles.map(article => ({url: article.url }));
        
        res.send(articles[0]);
	} catch (error) {
		if(error.response) {
			console.log(error)
		}
	}
})


module.exports = newsr;