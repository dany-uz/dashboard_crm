import { AccountModel, UserModel, LeadsContactModel, LeadsModel, LeadsLogModel } from '#database/models/index.js';

// Account 1:N Users
AccountModel.hasMany(UserModel, { foreignKey: 'account_id' });
UserModel.belongsTo(AccountModel, { foreignKey: 'account_id' });

// Account 1:N Leads
AccountModel.hasMany(LeadsModel, { foreignKey: 'account_id' });
LeadsModel.belongsTo(AccountModel, { foreignKey: 'account_id' });

// LeadsContact 1:N Leads
LeadsContactModel.hasMany(LeadsModel, { foreignKey: 'contact_id' });
LeadsModel.belongsTo(LeadsContactModel, { foreignKey: 'contact_id' });

// User 1:N Leads
UserModel.hasMany(LeadsModel, { foreignKey: 'user_id' });
LeadsModel.belongsTo(UserModel, { foreignKey: 'user_id' });

// Account 1:N LeadsLog
AccountModel.hasMany(LeadsLogModel, { foreignKey: 'account_id' });
LeadsLogModel.belongsTo(AccountModel, { foreignKey: 'account_id' });

// Lead 1:N LeadsLog
LeadsModel.hasMany(LeadsLogModel, { foreignKey: 'lead_id' });
LeadsLogModel.belongsTo(LeadsModel, { foreignKey: 'lead_id' });

// User 1:N LeadsLog
UserModel.hasMany(LeadsLogModel, { foreignKey: 'user_id' });
LeadsLogModel.belongsTo(UserModel, { foreignKey: 'user_id' });

export { AccountModel, UserModel, LeadsContactModel, LeadsModel, LeadsLogModel }; 