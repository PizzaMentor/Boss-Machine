const ideasRouter = require('express').Router();

module.export = ideasRouter;

const { 
    addToDatabase, getAllFromDatabase, getFromDatabaseById, 
    updateInstanceInDatabase, deleteFromDatabasebyId, updateInstanceInDatabase, } = require('./db');

    const checkMillionDollarIdea = require('./checkMillionDollarIdea');
const { de } = require('faker/lib/locales');

    ideasRouter.param ('id', (req, res, next, id) => {
        const idea = getFromDatabaseById('ideas', id);
        if (idea) {
            req.idea = idea;
            next();
        } else {
            res.status(404).send();
        }
    });

    ideasRouter.get('/', (req, res, next) => {
       res.send(getAllFromDatabase('ideas'));
    });

    ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
        const newIdea = addToDatabase('ideas', req.body);
        res.status(201).send(newIdea);
    });

    ideasRouter.get('/:id', (req, res, next) => {
        res.send(req.idea);
      });

    ideasRouter.put('/:id', checkMillionDollarIdea, (req, res, next) => {
        let updateInstanceInDatabase = updateInstanceInDatabase('ideas', req.body);

    });

    ideasRouter.delete('/:id', (req, res, next) => {
        const deleted = deleteFromDatabasebyId('ideas', req.params.workid);
        if(deleted) {
            res.status(204)
        } else {
            res.status(500);
        }
        res.send();
    });
