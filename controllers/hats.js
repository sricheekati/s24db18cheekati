var hats = require('../models/hats');
// List of all hats
exports.hats_list = function (req, res) {
    res.send('NOT IMPLEMENTED: hats list');
};
// for a specific hats.
// exports.hats_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: hats detail: ' + req.params.id);
// };
// for a specific hats.
exports.hats_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await hats.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle hats create on POST.
exports.hats_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: hats create POST');
};
// Handle hats delete from on DELETE.
exports.hats_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: hats delete DELETE ' + req.params.id);
};
// Handle hats update form on PUT.
// 
//Handle hats update form on PUT.
exports.hats_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await hats.findById(req.params.id)
        // Do updates of properties
        if (req.body.hats_type)
            toUpdate.hats_type = req.body.hats_type;
        if (req.body.price) toUpdate.price = req.body.price;
        if (req.body.size) toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// List of all hats
exports.hats_list = async function (req, res) {
    try {
        thehats = await hats.find();
        res.send(thehats);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.hats_view_all_Page = async function (req, res) {
    try {
        thehats = await hats.find();
        res.render('hats', { title: 'hats Search Results', results: thehats });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle hats create on POST.
exports.hats_create_post = async function (req, res) {
    console.log(req.body)
    let document = new hats();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"hats_type":"goat", "price":12, "size":"large"}
    document.hats_type = req.body.hats_type;
    document.price = req.body.price;
    document.size = req.body.size;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle hats delete on DELETE.
exports.hats_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await hats.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.hats_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await hats.findById( req.query.id)
    res.render('hatsdetail',
   { title: 'hats Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle building the view for creating a hats.
// No body, no in path parameter, no query.
// Does not need to be async
exports.hats_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('hatscreate', { title: 'hats Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
// Handle building the view for updating a hats.
// query provides the id
exports.hats_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await hats.findById(req.query.id)
    res.render('hatsupdate', { title: 'hats Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle a delete one view with id from query
exports.hats_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await hats.findById(req.query.id)
    res.render('hatsdelete', { title: 'hats Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

