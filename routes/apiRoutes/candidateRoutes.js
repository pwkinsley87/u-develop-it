const express = require('express');
const rouer = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');