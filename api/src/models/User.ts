import Model from "./Model";
import { DataTypes } from "sequelize";
import Task from "./Task";




export default Model.define(
    'user',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    }

)