import { DataTypes } from 'sequelize';
import connection from '../connection.js';
import { dbTables } from '#config/config.js';

const Account = connection.define(dbTables.DBT_ACCOUNTS, {
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
    allowNull: false
  }
}, {
  tableName: dbTables.DBT_ACCOUNTS,
  timestamps: false
});

export default Account; 