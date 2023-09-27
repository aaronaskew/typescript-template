import { NS } from "@ns";

export async function main(ns: NS) {
    
    let hostname: string = ns.args[0].toString();
    const argslength = ns.args.length;

    ns.getServerMaxMoney(hostname);
}