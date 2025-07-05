
import objectModel from '../models/object.model.js';

const objectService = {
  async getAllObjects() {
    return await objectModel.getAll();
  },

  async getObjectById(id) {
    return await objectModel.getById(id);
  },

  async createObject(title, description, image) {
    return await objectModel.create(title, description, image);
  },

  async updateObject(id, title, description, image) {
    return await objectModel.update(id, title, description, image);
  },

  async deleteObject(id) {
    return await objectModel.delete(id);
  },
};

export default objectService;
