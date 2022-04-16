/*
Copyright (C) 2021 Endpanda.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/

const QueenHuliet = require('queenjuliet-public');
const Build = QueenJuluet.build
const { DataTypes } = require('sequelize');

const NotesDB = Build.DATABASE.define('notes', {
    note: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});


async function getNotes() {
    const Notes = await NotesDB.findAll()

    return Notes
}

async function saveNote(note) {
    return await NotesDB.create({ note });
}

async function deleteAllNotes() {
    return await NotesDB.destroy({
        where: {},
        truncate: true
    })
}

module.exports = {
    NotesDB,
    getNotes,
    saveNote,
    deleteAllNotes
};
