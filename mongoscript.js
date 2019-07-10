use admin;
db.createUser(
  {
	user: "root_admin",
	pwd: "sussitDev",
	roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
);
use sussitDev;
db.createUser(
  {
	user: "root_DB",
	pwd: "sussitDev",
	roles: [ { role: "dbAdmin", db: "sussitDev" }, { role: "readWrite", db: "sussitDev" } ]
  }
);
exit;
