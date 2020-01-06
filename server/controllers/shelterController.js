const path = require("path");
const shelterController = {};
const fetch = require("node-fetch");

shelterController.getShelters = (req, res, next) => {
  console.log("i'm in shelterController: ", req.query);
  const url =
    "https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/LMS_Data_Public/MapServer/158/query?where=1%3D1&outFields=*&outSR=4326&f=json";
  fetch(url)
    .then(data => data.json())
    .then(shelters => {
      const sheltersArr = [];
<<<<<<< HEAD
      const selectedLocation = req.query.location;
      const categoryKeywords = categoryToKeywords[req.query.category]; // ['youth', 'young', 'runaway', 'at-risk']
=======
      const selectedLocation = req.body.location;
      const categoryKeywords = categoryToKeywords[req.body.category]; // ['youth', 'young', 'runaway', 'at-risk']
>>>>>>> a3748eb1cefe55dfb516361a07718c6bcadfa931
      for (let i = 0; i < shelters.features.length; i++) {
        const {
          OBJECTID,
          Name,
          description,
          addrln1,
          addrln2,
          city,
          zip,
          hours,
          phones,
          email,
          url
        } = shelters.features[i].attributes;
        // if there is no category word or if the description contains any of the keywords, then push it
        if (
          (!categoryKeywords ||
<<<<<<< HEAD
            categoryKeywords.find(keyword =>
              description.toLowerCase().includes(keyword)
            )) &&
          city === selectedLocation
=======
          categoryKeywords.find(keyword =>
            description.toLowerCase().includes(keyword)
          )) && (city === selectedLocation)
>>>>>>> a3748eb1cefe55dfb516361a07718c6bcadfa931
        ) {
          sheltersArr.push({
            OBJECTID,
            Name,
            description,
            addrln1,
            addrln2,
            city,
            zip,
            hours,
            phones,
            email,
            url
          });
        }
      }
      res.locals.shelters = { results: sheltersArr };
      return next();
    })
    .catch(err => console.log("You're in the shelterController!", err));
};

const categoryToKeywords = {
  women: ["women", "pregnant", "battered", "domestic violence", "victims"],
  families: ["families", "children", "family"],
  youth: ["youth", "young", "runaway", "at-risk"],
  substance: ["substance", "drug"],
  mental: ["mental", "mentally ill"],
  veterans: ["veterans"],
  housing: ["housing", "shelter", "motel"],
  food: ["food"],
  counseling: ["counseling"],
  transportation: ["transportation"],
  employment: ["employment"],
  disabled: ["developmental", "disabilities"],
  holiday: ["holiday"],
  std: ["hiv", "aids"],
  education: ["education"],
  refugees: ["refugees"],
  translator: ["translator", "interpreter"]
};
// Display all Favorites
shelterController.getFavs = ((req, res, next) => {
  
})
//Add the Favorites to the Database onClick
shelterController.addFavs = ((req, res, next) => {

})
//Remove the Favorite from the Database onClick
shelterController.removeFav = ((req, res, next) => {

})

module.exports = shelterController;
