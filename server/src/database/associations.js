import { Account, User, LeadsContact, Leads, LeadsLog } from './models/index.js';

// Account 1:N Users
Account.hasMany(User, { foreignKey: 'account_id' });
User.belongsTo(Account, { foreignKey: 'account_id' });

// Account 1:N Leads
Account.hasMany(Leads, { foreignKey: 'account_id' });
Leads.belongsTo(Account, { foreignKey: 'account_id' });

// LeadsContact 1:N Leads
LeadsContact.hasMany(Leads, { foreignKey: 'contact_id' });
Leads.belongsTo(LeadsContact, { foreignKey: 'contact_id' });

// User 1:N Leads
User.hasMany(Leads, { foreignKey: 'user_id' });
Leads.belongsTo(User, { foreignKey: 'user_id' });

// Account 1:N LeadsLog
Account.hasMany(LeadsLog, { foreignKey: 'account_id' });
LeadsLog.belongsTo(Account, { foreignKey: 'account_id' });

// Lead 1:N LeadsLog
Leads.hasMany(LeadsLog, { foreignKey: 'lead_id' });
LeadsLog.belongsTo(Leads, { foreignKey: 'lead_id' });

// User 1:N LeadsLog
User.hasMany(LeadsLog, { foreignKey: 'user_id' });
LeadsLog.belongsTo(User, { foreignKey: 'user_id' }); 