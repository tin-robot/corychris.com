import PocketBase from "pocketbase";
import type { TypedPocketBase } from "../pocketbase-types";

const url = "https://corychris.pockethost.io/";
export const pb = new PocketBase(url) as TypedPocketBase;
