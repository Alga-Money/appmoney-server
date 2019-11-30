const fs = require("fs");
module.exports = function(app) {
  try {          
    fs.readdirSync('./server/routes').forEach(function(file) {      
      if (file.substr(-3) == ".js") {
         require('./server/routes/' + file)(app);
       }
    }); 
  } catch (error) {
    console.log(`Erro ao buscar diretorio! ${error}`);
  }  
};