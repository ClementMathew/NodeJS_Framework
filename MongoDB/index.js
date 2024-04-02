var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/Myself",)

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log("Connected")
})

const mySchema = new mongoose.Schema({
    name: String
});

mySchema.methods.speak = function () {
    var greeting = this.name
    console.log(greeting);
}

var theSchema = mongoose.model('details', mySchema)

var schemaDone = new theSchema({ name: 'Clement' });

schemaDone.save()

const result = theSchema.find({ name: 'Clement' })
console.log(result)