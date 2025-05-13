var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Service } from '../service/service.js';
import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_KEY });
export class Controller {
    constructor(db) {
        this.postRegister = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (!req.body) {
                res.status(400).json({ message: 'The request body is empty' });
                return;
            }
            try {
                const { email, password } = req.body;
                yield this.service.postRegister(email, password);
                res.status(201).json({ message: 'User registered successfully' });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: error.message });
            }
        });
        this.postLogin = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var user_id;
            try {
                const { email, password } = req.body;
                user_id = yield this.service.postLogin(email, password);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: error.message });
            }
            ;
            if (user_id != null) {
                req.session.user_id = user_id;
            }
            res.status(200).json({ message: 'logged in' });
        });
        this.getScannerData = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.service.getScannerData();
                res.json(data);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Failed to fetch scanner data' });
            }
        });
        this.postScannerData = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { pollution, x_coor, y_coor } = req.body;
                yield this.service.postScannerData(pollution, x_coor, y_coor);
                res.status(201).json({ message: 'Scanner data posted successfully' });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: error.message });
            }
        });
        this.postPollutionExposure = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { x_coor, y_coor, pollution } = req.body;
                if (!req.session.user_id) {
                    res.status(400).json({ message: 'unauthenticated' });
                    return;
                }
                const user_id = req.session.user_id;
                yield this.service.postPollutionExposure(user_id, x_coor, y_coor, pollution);
                res.status(201).json({ message: 'Pollution exposure data recorded' });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: error.message });
            }
        });
        this.getExposureDataById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user_id = req.session.user_id;
            if (!user_id) {
                res.status(400).json({ message: 'unauthenticated' });
                return;
            }
            try {
                const data = yield this.service.getExposureDataById(user_id);
                res.status(200).json(data);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: error.message });
            }
        });
        this.calculateMap = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(200).json(yield this.service.calculateMap());
            }
            catch (error) {
                console.error(error);
                return res.status(500).json(error);
            }
        });
        this.getMission = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var user_id = req.session.user_id;
            if (!user_id) {
                res.status(400).json({ message: 'unauthenticated' });
                return;
            }
            try {
                return res.status(200).json(yield this.service.getMission(user_id));
            }
            catch (error) {
                console.error(error);
                return res.status(500).json(error);
            }
        });
        this.generateGemini = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user_id = req.session.user_id;
            if (!user_id) {
                res.status(400).json({ message: 'unauthenticated' });
                return;
            }
            try {
                var exposure_data = JSON.stringify(yield this.service.getExposureDataById(user_id));
                var response = yield ai.models.generateContent({
                    model: "gemini-2.0-flash",
                    contents: `Explain and summarize these data. Make comparison where necessary. Data:${exposure_data}`,
                    config: {
                        maxOutputTokens: 500,
                        temperature: 0.4,
                    },
                });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json(error);
            }
            res.status(200).json({ message: response.text });
        });
        this.postMission = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var { mission, points } = req.body;
            try {
                yield this.service.postMission(mission, points);
                res.status(201).json({
                    message: 'Mission created successfully',
                });
            }
            catch (error) {
                console.error('Error creating mission:', error);
                res.status(500).json({
                    error: 'Failed to create mission',
                    details: error instanceof Error ? error.message : 'Unknown error'
                });
            }
        });
        this.deleteMission = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { mission_id } = req.body;
                yield this.service.deleteMission(mission_id);
                res.status(200).json({
                    message: 'Mission deleted successfully',
                    mission_id
                });
            }
            catch (error) {
                console.error('Error deleting mission:', error);
                res.status(500).json({
                    error: 'Failed to delete mission',
                    details: error instanceof Error ? error.message : 'Unknown error'
                });
            }
        });
        this.postUserMissionProgress = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { mission_id, quantity } = req.body;
                if (!req.session.user_id) {
                    res.status(400).json({ message: 'unauthenticated' });
                    return;
                }
                const user_id = req.session.user_id;
                yield this.service.postUserMissionProgress(user_id, mission_id, quantity);
                res.status(201).json({
                    message: 'User mission progress recorded successfully',
                    user_id,
                    mission_id,
                    quantity
                });
            }
            catch (error) {
                console.error('Error recording user mission progress:', error);
                res.status(500).json({
                    error: 'Failed to record user mission progress',
                    details: error instanceof Error ? error.message : 'Unknown error'
                });
            }
        });
        this.postGoogleSignIn = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                var { token, email, uid } = req.body;
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: error.message });
            }
            if (uid != null) {
                req.session.user_id = uid;
            }
            res.status(201).json({ message: 'User signed in successfully' });
        });
        this.service = new Service(db);
    }
}
