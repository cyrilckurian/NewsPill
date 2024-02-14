const express = require('express');
require("dotenv").config();
const OpenAI = require('openai');
const { reply_to_strings } = require('redis/lib/utils');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function summarizeContent(searchurl) {
    try {
		
        const responsechat = await openai.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            prompt: `summarize the content in the given link into 5 important short points "${searchurl}"`,
            max_tokens: 150,
            temperature: 0,
        });
		return responsechat.choices[0].text.trim();
		
    } catch (error) {
		console.error('An error occurred:', error.message);
        console.error(error.stack);
        throw error;
    }
}

module.exports = {
    summarizeContent
};
