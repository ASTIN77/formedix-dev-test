const express             =       require('express'),
      bodyParser          =       require('body-parser'),
      session             =       require('express-session'),
      axios               =       require('axios'),
      memoryStore         =       require('session-memory-store')(session),
      flash               =       require('connect-flash'),
      app                 =       express();
      
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
      secret: "IrnBru32Phenomonal",
      resave: false,
      saveUninitialized: false,
      store: new memoryStore() }));
app.use(flash());
app.use(function(req,res, next){
      res.locals.currentUser = req.user;
      res.locals.error = req.flash("error");
      res.locals.success = req.flash("success");
      res.locals.confirm = req.flash("confirm");
      next(); });
     
// use port 3000 unless there exists a preconfigured port
let port = process.env.port // || 3000;
console.group(port)

app.get("/", (req,res) => {
    res.render("index");
});

app.post("/", (req,res) => {

   var searchTerms = req.body.searchTerms;
   var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&tags='"+ searchTerms +"'&text='"+ searchTerms +"'&per_page=4000&api_key=832d60890a927ccd7396a6a27244a300&format=json&nojsoncallback=1";
    
    
//    axios.get(url)
//        .then(function(response) {
//        var searchResults = response.data;
//        res.render("searchResults", {photoResults: searchResults});
//    })
//    .catch(function(error) {
//        req.flash("error", "Search criteria returned zero results");
//        res.redirect("back");
//    });

    async function getPost() {
        const postResponse = await fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&tags='"+ searchTerms +"'&text='"+ searchTerms + 
                                            "'&per_page=48&api_key=832d60890a927ccd7396a6a27244a300&format=json&nojsoncallback=1");
         const postData = await postResponse.json();     
         addDataToResultsPage(data);                              
    }

    function addDataYoResultsPage(data) {

        
    }


    
});
app.listen(app.get('port'), function(){
      console.log('Formedix Flickr Successfully Started');
      });
