use admin
db.system.users.remove({})
db.system.version.remove({})
db.system.version.insert({ "_id" : "authSchema", "currentVersion" : 3 })
use admin
db.createUser(
  {
	user: "root_admin",
	pwd: "LkqbVNMZ9hxxBehG",
	roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
);
use saveTM
db.test.insert( { item: "test", qty: 15 } )
db.createUser(
  {
	user: "root_DB",
	pwd: "LkqbVNMZ9hxxBehG",
	roles: [ { role: "dbAdmin", db: "saveTM" }, { role: "readWrite", db: "saveTM" } ]
  }
);