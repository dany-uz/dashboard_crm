import { DataTypes } from 'sequelize';
import { connectionSQL } from '#database/connection.js';
import { dbTables } from '#config/config.js';

const LeadsContactModel = connectionSQL.define(dbTables.DBT_LEADS_CONTACTS, {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    full_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(20)
    },
    company: {
        type: DataTypes.STRING(100)
    },
    position: {
        type: DataTypes.STRING(100)
    },
    address: {
        type: DataTypes.STRING(255)
    }
}, {
    tableName: dbTables.DBT_LEADS_CONTACTS,
    timestamps: false
});

export default LeadsContactModel; 