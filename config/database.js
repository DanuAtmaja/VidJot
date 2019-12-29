if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb+srv://drnfx25:pedrosa26@vidjot-prod-9eiig.mongodb.net/test?retryWrites=true&w=majority'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}