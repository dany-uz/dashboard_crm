import { DataTypes } from 'sequelize';
import connection from '../connection.js';
import { dbTables } from '#config/config.js';

const LeadsLog = connection.define(dbTables.DBT_LEADS_LOGS, {
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
  lead_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  action: {
    type: DataTypes.STRING(255)
  },
  comment: {
    type: DataTypes.STRING(255)
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: dbTables.DBT_LEADS_LOGS,
  timestamps: false
});

export default LeadsLog; 