const express = require('express');
const router = express.Router();

let students = require('../students.json');

router.get('/', (req, res) => {
    res.json({ students: students });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    const student = students.filter((student) => {
        return student.id == id;
    });
    if (!student.length) {
        next();
    }
    res.json({ student: student[0] });
});

router.post('/', (req, res, next) => {
    const body = req.body;
    students.push(body);
    res.json({ students: students });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;

    const updatedStudents = students.map((student) => {
        if (student.id == id) {
            return body;
        }
        return student;
    });
    res.json({ students: updatedStudents });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const trash = students.filter((student) => {
        return student.id != id;
    });
    res.json({ students: trash });
});

module.exports = router;
