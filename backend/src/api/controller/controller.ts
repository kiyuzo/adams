// controller.ts
import { Request, Response} from 'express';
import { Service } from '../service/service.js';
import { DbType } from '../repository/repository.js';
import { GoogleGenAI } from "@google/genai";
import 'dotenv/config'
import { json } from 'drizzle-orm/gel-core';
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_KEY });


export class Controller {
    service:Service
  constructor(db:DbType) {
    this.service = new Service(db)
  }


  postRegister = async (req: Request, res: Response) => {
    if(!req.body){
      res.status(400).json({message:'The request body is empty'})
      return;
    }
    try {
      const { email, password } = req.body;
      await this.service.postRegister(email, password);
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error:any) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

  postLogin = async (req: Request, res: Response) => {
    var user_id;
    try {
      const { email, password } = req.body;
      user_id = await this.service.postLogin(email, password);
    } catch (error:any) {
      console.error(error);
      res.status(500).json({ error: error.message });
    };
    if (user_id != null) {
      req.session.user_id = user_id;
    }
    res.status(200).json({message:'logged in'})
  };


  getScannerData = async (req: Request, res: Response) => {
    try {
      const data = await this.service.getScannerData();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch scanner data' });
    }
  };
  postScannerData = async (req: Request, res: Response) => {
    try {
      const { pollution, x_coor, y_coor } = req.body;
      await this.service.postScannerData(pollution, x_coor, y_coor);
      res.status(201).json({ message: 'Scanner data posted successfully' });
    } catch (error:any) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

  postPollutionExposure = async (req: Request, res: Response) => {
    try {
      const {x_coor, y_coor, pollution } = req.body;
      if(!req.session.user_id){
        res.status(400).json({message:'unauthenticated'})
        return;
      }
      const user_id = req.session.user_id;
      await this.service.postPollutionExposure(user_id, x_coor, y_coor, pollution);
      res.status(201).json({ message: 'Pollution exposure data recorded' });
    } catch (error:any) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  getExposureDataById = async (req: Request, res: Response) => {
    const user_id = req.session.user_id;
    if(!user_id){
      res.status(400).json({message:'unauthenticated'})
      return;
    }
    try {
      const data = await this.service.getExposureDataById(user_id);
      res.status(200).json(data);
    } catch (error:any) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  calculateMap = async(req:Request, res:Response)=>{
    try{
      return res.status(200).json(await this.service.calculateMap())
    }catch(error){
      console.error(error)
      return res.status(500).json(error)
    }
  }
  getMission = async (req:Request, res:Response)=>{
    var user_id = req.session.user_id;
    if(!user_id){
      res.status(400).json({message:'unauthenticated'})
      return;
    }
    try{
      return res.status(200).json(await this.service.getMission(user_id))
    } catch(error){
      console.error(error)
      return res.status(500).json(error)
    }
  }
  generateGemini = async (req:Request, res:Response)=>{
    const user_id = req.session.user_id;
    if(!user_id){
      res.status(400).json({message:'unauthenticated'})
      return;
    }
    try{
      var exposure_data = JSON.stringify(await this.service.getExposureDataById(user_id));
        var response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: `Explain and summarize these data. Make comparison where necessary. Data:${exposure_data}`,
          config: {
            maxOutputTokens:500,
            temperature: 0.4,
          },
        });
      
      } catch(error){
        console.error(error)
        return res.status(500).json(error)
      }
    res.status(200).json({message:response.text});
  }
  postMission = async (req: Request, res: Response) => {
      var { mission, points } = req.body;
    try{
      await this.service.postMission(mission, points);
      
      res.status(201).json({ 
        message: 'Mission created successfully',

      });
    } catch (error) {
      console.error('Error creating mission:', error);
      res.status(500).json({ 
        error: 'Failed to create mission',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  deleteMission = async (req: Request, res: Response) => {
    try {
      const { mission_id } = req.body;
      await this.service.deleteMission(mission_id);
      
      res.status(200).json({ 
        message: 'Mission deleted successfully',
        mission_id
      });
    } catch (error) {
      console.error('Error deleting mission:', error);
      res.status(500).json({ 
        error: 'Failed to delete mission',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }
  postLogout = async (req: Request, res: Response) => {
    req.session.user_id = null;
  }
}