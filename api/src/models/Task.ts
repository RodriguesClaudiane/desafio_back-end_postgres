import Model from './Model';
import {DataTypes, INTEGER} from "sequelize";

export default Model.define(
    'Task',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        status:{
            type: DataTypes.ENUM,
            values: ['Em andamento','Finalizado'],
            defaultValue: 'Em andamento'
        },
        priority:{
            type: DataTypes.INTEGER,
            validate:{
                min: 1,
                max: 10
            },
            allowNull: false
        }
    }
);