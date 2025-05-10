const express = require("express");
const router = express.Router();
const noteController = require("../controller/notes.controller");

/**
 * @swagger
 * /api/notes:
 *   get:
 *     summary: Get all notes
 *     responses:
 *       200:
 *         description: A list of notes
 */
router.get("/", noteController.getNotes);

/**
 * @swagger
 * /api/notes:
 *   post:
 *     summary: Create a note
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Note created
 */
router.post("/", noteController.createNote);

module.exports = router;
