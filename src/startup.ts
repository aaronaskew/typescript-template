/** @param {NS} ns */
import { NS } from "@ns";

export async function main(ns: NS) {
    // Array of all servers that don't need any ports opened
    // [server, nuke_ports_needed, ram (in GB)]

    const payload: String = String(ns.args[0]);
    
    const payload_mem = ns.mem

    const servers = [
        { host: "n00dles", nuke_ports: 0, ram: 4 },
        { host: "foodnstuff", nuke_ports: 0, ram: 16 },
        { host: "sigma-cosmetics", nuke_ports: 0, ram: 16 },
        { host: "zer0", nuke_ports: 1, ram: 32 },
        { host: "neo-net", nuke_ports: 1, ram: 32 },
        { host: "silver-helix", nuke_ports: 2, ram: 64 },
        { host: "phanstasy", nuke_ports: 2, ram: 32 },
        { host: "omega-net", nuke_ports: 2, ram: 32 },
        { host: "joesguns", nuke_ports: 0, ram: 16 },
        { host: "hong-fang-tea", nuke_ports: 0, ram: 16 },
        { host: "nectar-net", nuke_ports: 0, ram: 16 },
        { host: "harakiri-sushi", nuke_ports: 0, ram: 16 },
        { host: "CSEC", nuke_ports: 1, ram: 8 },
        { host: "iron-gym", nuke_ports: 1, ram: 32 },
        { host: "max-hardware", nuke_ports: 1, ram: 32 },
    ];

    for (var server in servers) {

    }

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