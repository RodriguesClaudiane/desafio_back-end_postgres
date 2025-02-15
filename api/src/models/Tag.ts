import Model from "./Model";
import { DataTypes } from "sequelize";
import Task from "./Task";


export default Model.define(
    'tag',
    {
        name:{
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true,
        },
        color:{
            type: DataTypes.STRING
        }
    }
);