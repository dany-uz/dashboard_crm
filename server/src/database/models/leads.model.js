import { DataTypes } from 'sequelize';
import { connectionSQL } from '#database/connection.js';
import { dbTables } from '#config/config.js';

const LeadsModel = connectionSQL.define(dbTables.DBT_LEADS, {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    account_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    contact_id: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.BIGINT
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    source: {
        type: DataTypes.STRING(255)
    },
    priority: {
        type: DataTypes.ENUM('low', 'medium', 'high'),
        allowNull: false
    },
    notes: {
        type: DataTypes.TEXT
    },
    money: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: dbTables.DBT_LEADS,
    timestamps: false
});

export default LeadsModel; 