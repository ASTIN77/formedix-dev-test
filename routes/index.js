const   express             =       require('express'),
        axios               =       require('axios'),
        parseString         =       require('xml2js').parseString,
        router              =       express.Router({mergeParams: true});
        
router.get("/", (req,res) => {
    res.render("index");
});


router.post("/", (req,res) => {

    var searchTerms = req.body.searchTerms;
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&tags='"+ searchTerms +"'&text='"+ searchTerms +"'&per_page=4000&api_key=832d60890a927ccd7396a6a27244a300&format=json&nojsoncallback=1";
    console.log(searchTerms);
    
    
    axios.get(url)
        .then(function(response) {
        var searchResults = response.data;
        console.log(searchResults);
        res.render("searchResults", {photoResults: searchResults});
    })
    .catch(function(error) {
        req.flash("error", "Search criteria returned zero results");
        res.redirect("back");
    });
    
});

module.exports = router;