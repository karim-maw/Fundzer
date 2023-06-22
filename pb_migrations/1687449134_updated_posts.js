migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f3730j7bvcocg4z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ufqeqoky",
    "name": "username",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f3730j7bvcocg4z")

  // remove
  collection.schema.removeField("ufqeqoky")

  return dao.saveCollection(collection)
})
