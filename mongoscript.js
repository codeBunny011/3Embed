use admin
db.createUser(
  {
	user: "root_admin",
	pwd: "LkqbVNMZ9hxxBehG",
	roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
);
use sussitDev
db.sussitDev.insert( { item: "test", qty: 15 } )
db.createUser(
  {
	user: "root_DB",
	pwd: "sussitDev",
	roles: [ { role: "dbAdmin", db: "sussitDev" }, { role: "readWrite", db: "sussitDev" } ]
  });
