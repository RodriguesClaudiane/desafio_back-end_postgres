import Model from "./Model";
import { DataTypes } from "sequelize";

export default Model.define(
    'tag_task',
    {
        tagId:{
            type: DataTypes.STRING,
            allowNull: false,
            references:{
                model: 'tag',
                key: 'name'
            }
        },
        taskId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'task',
                key: 'id'
            }
        }
    }
)