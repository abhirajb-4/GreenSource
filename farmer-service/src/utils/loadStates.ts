// utils/loadStates.ts
import fs from "fs";
import path from "path";
import state from "../model/state.model";

export const loadStates = async () => {
  const filePath = path.join(__dirname, "../statesData/states.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw);

  for (const stateData of data) {
    const exists = await state.findOne({ name: stateData.state });
    if (!exists) {
      await state.create({
        name: stateData.state,
        districts: stateData.districts.map((d: string) => ({ name: d })),
      });
    }
  }

  console.log("States and districts loaded.");
};
