// src/api/aiService.js
import axios from 'axios';

export const fetchCodeSuggestion = async (codeInput) => {
  const response = await axios.post('https://api.openai.com/v1/completions', {
    prompt: codeInput,
    model: 'text-davinci-003', // Or any other relevant model
    max_tokens: 200,
  });
  return response.data.choices[0].text;
};
