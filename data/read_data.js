const yaml = require('js-yaml');
const fs = require('fs');

//Read ./data/data.yml YAML file into a JSON object
const dataYML= "./data/data.yml"
const dataJSON = yaml.load(fs.readFileSync(dataYML, {encoding: 'utf-8'})); 


module.exports= {
    dataJSON
}
