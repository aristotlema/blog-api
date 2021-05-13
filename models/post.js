'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Comment }) {
      // define association here
      this.hasMany(Comment, { foreignKey: 'postId', as: 'comments' });
    }
  };
  Post.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'post',
    modelName: 'Post',
  });
  return Post;
};