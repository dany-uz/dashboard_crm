import { DataTypes } from 'sequelize';
import { connectionSQL } from '#database/connection.js';
import { dbTables } from '#config/config.js';

const AccountModel = connectionSQL.define(dbTables.DBT_ACCOUNT, {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    uri: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: dbTables.DBT_ACCOUNT,
    timestamps: false
});

export default AccountModel; 