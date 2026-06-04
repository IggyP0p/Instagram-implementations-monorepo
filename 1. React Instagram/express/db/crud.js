import connect from "./conn.js";

export const create = async (colection, doc) => {
   
    const db = await connect();

    const myColl = db.collection(colection);
    
    doc.createdAt = new Date();
    const result = await myColl.insertOne(doc);

    console.log(`A document was inserted ${result.insertedId}`);
};

export const read = async (collection) => {

    const db = await connect();

    const myColl = db.collection(collection);

    const result = await myColl.find();

    console.log(`A document was found ${result}`);
};

export const update = async (collection) => {

    const db = await connect();

    const myColl = db.collection(collection);

    const result = await myColl.updateOne(
        {nome : "João"},
        {$set : {idade: 26}}
    );

    console.log(`A document was found ${result}`);
};

export const delet = async (collection) => {

    const db = await connect();

    const myColl = db.collection(collection);

    const result = await myColl.deleteOne({nome : "João"});

    console.log(`A document was deleted ${result}`);
};