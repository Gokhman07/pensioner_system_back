//const Funds=require("./funds")


const Pensioners =require("./pensioners")
const Marit_statuses =require("./marit_statuses")
const Empl_stats=require("./empl_stats")
const Group_admins=require("./groop_admins")
const Childrens=require("./childrens")
const Couples = require("./couples")
const Risk_insurances =require("./risk_insurances")




Marit_statuses.hasMany(Pensioners, { foreignKey: "marital_id" });
Pensioners.belongsTo(Marit_statuses, { foreignKey: "marital_id" });

Empl_stats.hasMany(Pensioners, { foreignKey: "id_empl_status" });
Pensioners.belongsTo(Empl_stats, { foreignKey: "id_empl_status" });

Group_admins.hasMany(Pensioners, { foreignKey: "group_id" });
Pensioners.belongsTo(Group_admins, { foreignKey: "group_id" });

Group_admins.hasMany(Pensioners, { foreignKey: "group_id" });
Pensioners.belongsTo(Group_admins, { foreignKey: "group_id" });



Childrens.hasMany(Pensioners, { foreignKey: "father_id" });
Pensioners.belongsTo(Childrens, { foreignKey: "father_id" });


Childrens.hasMany(Pensioners, { foreignKey: "mother_id" });
Pensioners.belongsTo(Childrens, { foreignKey: "mother_id" });



Couples.hasMany(Pensioners, { foreignKey: "couple_id" });
Pensioners.belongsTo(Couples, { foreignKey: "couple_id" });

Pensioners.hasMany(Pensioners, { foreignKey: "id_pensioner" });
Risk_insurances.belongsTo(Couples, { foreignKey: "id_pensioner" });