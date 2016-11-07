'use strict';

let request = require('request');
let cheerio = require('cheerio');

module.exports = {
  get(term, callback){
    let url = 'https://www.google.co.uk/search?tbm=isch&q=' + term;

    request(url, (err, res, html) => {
      let $ = cheerio.load(html);
      let suggestions = $('._Bmc a');
      if (err){
        callback(err);
        return;
      }

      let out = {
        suggestions: false,
        list: []
      };
      suggestions.each((index, el) => {
        let suggestion = {
          full: $(el).text(),
          extra: $(el).find('b').text()
        }
        out.list.push(suggestion);
        out.suggestions = true;
      });
      callback(null, out);
    })
  }
}
