'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Doctor_Clinnic_Speacialy extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Doctor_Clinnic_Speacialy.init({
        doctorId: DataTypes.INTEGER,
        clinnicId: DataTypes.INTEGER,
        speacialyId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Doctor_Clinnic_Speacialy',
    });
    return Doctor_Clinnic_Speacialy;
};