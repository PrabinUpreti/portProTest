import { Profile1 } from "./mongoDb";
import { Profile2 } from "./mysql";
import { Profile3 } from "./sqlite";

const Data = { ...Profile1, ...Profile2, ...Profile3 };
export default Data;
