var express = require('express);
var app = express();
app.get('/', function (req, res){
res send(index.html);
});
app.listen(process.env.PORT, '0.0.0.0');
