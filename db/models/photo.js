const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate(models) {
      this.belongsTo(models.Album, { foreignKey: 'albumId' });
    }
  }
  Photo.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      fullName: DataTypes.STRING,
      miniName: DataTypes.STRING,
      albumId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Photo',
    },
  );
  return Photo;
};
