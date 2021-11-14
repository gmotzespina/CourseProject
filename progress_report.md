# Which tasks have been completed?

- [x] Chrome extension setup with typescript and react.
- [x] Chrome extension integration with PDF viewer. [PDF.js Express](https://pdfjs.express/)
- [x] Perform search on PDF.
- Perform web scraping on the site.
- Perform word stemming and removing stopwords.

# Which tasks are pending?

### Perform web scraping on the site.

- Considering on using [Cheerio](https://cheerio.js.org/) or [Puppeteer](https://github.com/puppeteer/puppeteer).

### Perform word stemming and removing stopwords.

- I'm considering on creating my own implementation for stopwords removal using [NLTK's list of english stopwords](https://gist.github.com/sebleier/554280)
- Library considered for stemming: [stemmer](https://www.npmjs.com/package/stemmer).

# Are you facing any challenges?

- Tried one Web Scrapping Library but it was not fully compatible with typescript and it was not maintained.
- Haven't found which Library to use for stemming and removing stopwords
- I need to find a way to dynamically choose the PDF file to render. Currently I have a hardcoded path to the PDF I'm using for teting.
