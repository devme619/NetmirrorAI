// import OpenAI from "openai";
import { GoogleGenAI } from "@google/genai";

// const ai = new OpenAI({
//   apiKey: process.env.REACT_APP_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true,
// });

const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GEMINI_API_KEY });

export default ai;
