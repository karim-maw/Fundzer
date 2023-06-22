migrate((db) => {
  const collection = new Collection({
    "id": "f3730j7bvcocg4z",
    "created": "2023-06-22 15:50:59.593Z",
    "updated": "2023-06-22 15:50:59.593Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qf9glalm",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("f3730j7bvcocg4z");

  return dao.deleteCollection(collection);
})
