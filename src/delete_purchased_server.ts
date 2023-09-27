import { NS } from "@ns";

export async function main(ns: NS): Promise<void> {
  let hostname = String(ns.args[0]);
  ns.killall(hostname);
  ns.deleteServer(hostname);
}
