/** @param {NS} ns */
import { NS } from "@ns";

export async function main(ns: NS) {
    // Array of all servers that don't need any ports opened
    // [server, nuke_ports_needed, ram (in GB)]
    const servers = [
        ["n00dles", 0, 4],
        ["foodnstuff", 0, 16],
        ["sigma-cosmetics", 0, 16],
        ["zer0", 1, 32],
        ["neo-net", 1, 32],
        ["silver-helix", 2, 64],
        ["phanstasy", 2, 32],
        ["omega-net", 2, 32],
        ["joesguns", 0, 16],
        ["hong-fang-tea", 0, 16],
        ["nectar-net", 0, 16],
        ["harakiri-sushi", 0, 16],
        ["CSEC", 1, 8],
        ["iron-gym", 1, 32],
        ["max-hardware", 1, 32]
    ];

    // // Array of all servers that only need 1 port opened
    // // to gain root access. These have 32 GB of RAM
    // const servers1Port = [
    //     "neo-net",
    //     "zer0",
    //     "max-hardware",
    //     "iron-gym"
    // ];

    // Copy our scripts onto each server that requires 0 ports
    // to gain root access. Then use nuke() to gain admin access and
    // run the scripts.
    for (let i = 0; i < servers0Port.length; ++i) {
        const serv = servers0Port[i];

        ns.killall(serv);
        ns.scp("early-hack-template.js", serv);
        ns.nuke(serv);
        ns.exec("early-hack-template.js", serv, 6);
    }

    // Wait until we acquire the "BruteSSH.exe" program
    while (!ns.fileExists("BruteSSH.exe")) {
        await ns.sleep(60000);
    }

    // Copy our scripts onto each server that requires 1 port
    // to gain root access. Then use brutessh() and nuke()
    // to gain admin access and run the scripts.
    for (let i = 0; i < servers1Port.length; ++i) {
        const serv = servers1Port[i];

        ns.killall(serv)
        ns.scp("early-hack-template.js", serv);
        ns.brutessh(serv);
        ns.nuke(serv);
        ns.exec("early-hack-template.js", serv, 12);
    }
}