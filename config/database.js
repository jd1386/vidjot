if (process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: 'mongodb://jungdolee:jungdolee97@ds153851.mlab.com:53851/tutorial-vidjot-production'}
} else {
  module.exports = {mongoURI: 'mongodb://127.0.0.1:27017/vidjot-dev'}
}