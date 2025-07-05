
import objectService from '../services/object.service.js';

const objectController = {
  async getAllObjects(req, res) {
    try {
      const objects = await objectService.getAllObjects();
      res.json(objects);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getObjectById(req, res) {
    try {
      const object = await objectService.getObjectById(req.params.id);
      if (object) {
        res.json(object);
      } else {
        res.status(404).json({ message: 'Object not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async createObject(req, res) {
    try {
      const { title, description, image } = req.body;
      const newObject = await objectService.createObject(title, description, image);
      res.status(201).json(newObject);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async updateObject(req, res) {
    try {
      const { title, description, image } = req.body;
      const updatedObject = await objectService.updateObject(req.params.id, title, description, image);
      if (updatedObject) {
        res.json(updatedObject);
      } else {
        res.status(404).json({ message: 'Object not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async deleteObject(req, res) {
    try {
      const deletedObject = await objectService.deleteObject(req.params.id);
      if (deletedObject) {
        res.json({ message: 'Object deleted' });
      } else {
        res.status(404).json({ message: 'Object not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default objectController;
