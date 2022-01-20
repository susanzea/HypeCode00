const express = require("express");
const router = express.Router();
const File = require("../../models/File")
const passport = require("passport");
<<<<<<< HEAD
<<<<<<< HEAD
var ObjectId = require('mongodb').ObjectId;
const res = require("express/lib/response");
=======
>>>>>>> 8f80eda (fixing crud)
=======
var ObjectId = require('mongodb').ObjectId;
const res = require("express/lib/response");
>>>>>>> a58dc84 (crud all)

router.get('/', (request,response) => {

    File.find()
        .sort({date: -1})
        .then( files => response.json(files))
        .catch(errors => response.status(404).json({ NoFilesAttached: 'No files exist'}))

})

router.get('/user/:user_id', (request,response) => {
    File.find({ user: request.params.user_id})
        .sort({date: -1})
        .then( files => response.json(files))
        .catch(errors => response.status(404).json({ NoFilesAttached: 'No files associated with the user!'}))
})

router.get('/:id', (request,response) => {
    File.findById(request.params.id)
        .then( file => response.json(file))
        .catch(errors => response.status(404).json({ NoFilesAttached: 'No file exists!'}))
})

router.post('/', passport.authenticate('jwt', { session: false }), 
    (request,response) => {
        // const {errors, isValid } = validateFile(request.body);

        // if(!isValid) {
        //     return response.status(400).json(errors)
        // }

        const newFile = new File({
            code: request.body.code,
            user: request.user.id,
            name: request.body.name
        });

        newFile.save().then(file => response.json(file))
    }
)
router.patch('/:id', passport.authenticate('jwt', { session: false }), 
    (request,response) => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a58dc84 (crud all)
        File.updateOne({"_id": request.params.id, "user": request.user["id"]}, 
        {$set: {code : request.body.code, name : request.body.name }})    
        .then((res) => response.status(200).json({message: "successfully patched"}))
        .catch(errors => response.status(400).json({message: "something went wrong"}))
<<<<<<< HEAD
    }
)

// router.delete('/:id', passport.authenticate('jwt', {session: false}),
//     (request,response) => {
//         File.find( {"_id": request.params.id, "user": request.user["id"]}, 
//         function(error, found) {
//             if (error) {response.status(400).json({message: "No file found with the user"})} else {
//                 File.deleteOne({"_id": request.params.id, "user": request.user["id"]})
//                 .then(() => response.status(200).json({message: "Successfully deleted!"}))
//                 }
//             }
//         )
//     }
// )
router.delete('/:id', passport.authenticate('jwt', {session: false}),
    (request,response) => {
        File.deleteOne( {"_id": request.params.id, "user": request.user["id"]} ) 
        .then(() => response.status(200).json({ Deleted: 'It has been done'}))
        // .catch(errors => response.status(404).json({ Deleted: 'The file has been deleted'}))
    }
)
module.exports = router;
    // File.deleteOne({"_id": request.params.id, "user": request.user["id"]})
    // .then(() => response.status(200).json({message: "successfully deleted"}))
    // .catch(errors => response.status(400).json({message: "something went wrong"}))
=======
        File.updateOne({_id: File.findById(request.params.id)}, {$set: {code : request.body.code, name : request.body.name }})
=======
>>>>>>> a58dc84 (crud all)
    }
)

// router.delete('/:id', passport.authenticate('jwt', {session: false}),
//     (request,response) => {
//         File.find( {"_id": request.params.id, "user": request.user["id"]}, 
//         function(error, found) {
//             if (error) {response.status(400).json({message: "No file found with the user"})} else {
//                 File.deleteOne({"_id": request.params.id, "user": request.user["id"]})
//                 .then(() => response.status(200).json({message: "Successfully deleted!"}))
//                 }
//             }
//         )
//     }
// )
router.delete('/:id', passport.authenticate('jwt', {session: false}),
    (request,response) => {
        File.deleteOne( {"_id": request.params.id, "user": request.user["id"]} ) 
        .then(file => response(file))
        .catch(errors => response.status(404).json({ NoFilesAttached: 'No files exist'}))
    }
<<<<<<< HEAD

module.exports = router;
>>>>>>> 8f80eda (fixing crud)
=======
)
module.exports = router;
    // File.deleteOne({"_id": request.params.id, "user": request.user["id"]})
    // .then(() => response.status(200).json({message: "successfully deleted"}))
    // .catch(errors => response.status(400).json({message: "something went wrong"}))
>>>>>>> a58dc84 (crud all)
