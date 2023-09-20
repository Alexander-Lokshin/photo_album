const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.hasMany(models.Photo, { foreignKey: 'albumId' });
    }
  }
  Album.init(
    {
      title: DataTypes.STRING,
      isOpen: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Album',
    },
  );
  return Album;
};
