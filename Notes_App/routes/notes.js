const express=require('express');
const router = express.Router();
const Note = require("../models/Notes");

//get all notes

router.get('/', async (req,res)=>{
    try{
        const notes = await Note.find();
        res.json(notes);
    }catch{
        res.status(500).json({messege: err.messege});

    }
})



//get a single by id 
router.get('/:id' , async(req,res)=>{
    try{
     const note= await Note.findById(req.params.id); //params : url ma sa find ID
     if(!note){
        return res.status(404).json({messege : 'Notte not found'});

     }
     res.json(note);
    }catch{

        res.status(500).json({messege: err.messege});
    }
})


//create a note
router.post('/', async(req,res)=>{
    const note = new Note({
        title: req.body.title,
        content: req.body.content
    })

try{
    const newNote = await note.save();
    res.status(201).json(newNote);

}catch{
    res.status(400).json({messege : err.messege});

}
});



//update a note
router.put('/:id', async(req,res)=>{
    try{
        const note = await Note.findById(req.params.id);
        if(!note)
            return res.status(404).json({messege : 'Note not found'});

        if(req.body.title)
            note.title = req.body.title;

        if(req.body.content)
            note.content = req.body.content;

        const updateNote= await note.save();
        res.status(200).json(updateNote);

    }catch(err){
        res.status(500).json({messege : err.messege});
        
    }
})


//delete a node

router.delete('/:id', async (req,res)=>{
    try{
        const note = await  Note.findById(req.params.id);
        if(!note)
            return res.status(404).json({messege : 'Note not found'});

        await note.deleteOne();
        res.json({messege : "Note deleted successfully"});

    }catch(err){
        res.status(500).json({messege: err.messege});

    }
})

module.exports = router;