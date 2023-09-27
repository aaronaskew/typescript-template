/** @param {NS} ns */
import { NS } from "@ns";

export async function main(ns: NS) {
    // Array of all servers that don't need any ports opened
    // [server, nuke_ports_needed, ram (in GB)]

    const flags = ns.flags([
        ['payload', String(null)],
        ['payload_target', String(null)],
        ['attempt_backdoor', false]
    ])

    const payload = String(flags.payload);
    if (!ns.fileExists(payload)) {
        ns.tprint(`payload: ${payload} doesn't exist!`);
        ns.exit();
    }

    const payload_target = String(flags.payload_target);
    if (!ns.serverExists(payload_target)) {
        ns.tprint(`payload_target: ${payload_target} doesn't exist!`);
        ns.exit();
    }


    //const payload: String = String(ns.args[0]);

    //const payload_mem = ns.mem

    let servers = [
        { hostname: "n00dles", nuke_ports: 0, ram: 4 },
        { hostname: "foodnstuff", nuke_ports: 0, ram: 16 },
        { hostname: "sigma-cosmetics", nuke_ports: 0, ram: 16 },
        { hostname: "zer0", nuke_ports: 1, ram: 32 },
        { hostname: "neo-net", nuke_ports: 1, ram: 32 },
        { hostname: "silver-helix", nuke_ports: 2, ram: 64 },
        { hostname: "phantasy", nuke_ports: 2, ram: 32 },
        { hostname: "omega-net", nuke_ports: 2, ram: 32 },
        { hostname: "joesguns", nuke_ports: 0, ram: 16 },
        { hostname: "hong-fang-tea", nuke_ports: 0, ram: 16 },
        { hostname: "nectar-net", nuke_ports: 0, ram: 16 },
        { hostname: "harakiri-sushi", nuke_ports: 0, ram: 16 },
        { hostname: "CSEC", nuke_ports: 1, ram: 8 },
        { hostname: "iron-gym", nuke_ports: 1, ram: 32 },
        { hostname: "max-hardware", nuke_ports: 1, ram: 32 },
    ];

    ns.tprint(servers);

    //sort servers by nuke_ports
    servers.sort((a, b) => {
        return a.nuke_ports - b.nuke_ports;
    });

    ns.tprint("Sorted servers:\n" + servers);

    for (var server of servers) {
        ns.tprint(server);
        //if(server.hostname )

        //destructure server into individual variables
        const { hostname, nuke_ports, ram } = server;

        let ports_preventing_nuke = nuke_ports;
        //let is_nuke_able = false;

        //upload payload to server
        ns.scp(payload, hostname);

        while (ports_preventing_nuke > 0) {
            if (ns.fileExists("BruteSSH.exe")) {
                ns.brutessh(hostname);
                ports_preventing_nuke--;
            } else {
                while (!ns.fileExists("BruteSSH.exe")) {
                    ns.print(`awaiting BruteSSH.exe`);
                    await ns.sleep(1000);
                }
            }

            if (ns.fileExists("FTPCrack.exe")) {
                ns.ftpcrack(hostname);
                ports_preventing_nuke--;
            } else {
                while (!ns.fileExists("FTPCrack.exe")) {
                    ns.print(`awaiting FTPCrack.exe`);
                    await ns.sleep(1000);
                }
            }
        }

        ns.nuke(hostname);
        ns.killall(hostname);

        //determine optimum threads based on ram available on the server
        const required_ram = ns.getScriptRam(payload, hostname);
        ns.tprint(`ram needed for ${payload}: ${required_ram}`);
        const available_ram = ns.getServerMaxRam(hostname) - ns.getServerUsedRam(hostname);
        const num_threads = Math.floor(available_ram / required_ram);
        ns.tprint(`threads: ${num_threads}`);

        ns.exec(payload, hostname, num_threads, "--target", payload_target)


        //defaults to false, as the ability to script this is not unlocked
        // if (flags.attempt_backdoor) {
        //     ns.exec("backdoor", hostname);
        // }

    }

    // // Copy our scripts onto each server that requires 0 ports
    // // to gain root access. Then use nuke() to gain admin access and
    // // run the scripts.
    // for (let i = 0; i < servers0Port.length; ++i) {
    //     const serv = servers0Port[i];

    //     ns.killall(serv);
    //     ns.scp("early-hack-template.js", serv);
    //     ns.nuke(serv);
    //     ns.exec("early-hack-template.js", serv, 6);
    // }

    // // Wait until we acquire the "BruteSSH.exe" program
    // while (!ns.fileExists("BruteSSH.exe")) {
    //     await ns.sleep(60000);
    // }

    // // Copy our scripts onto each server that requires 1 port
    // // to gain root access. Then use brutessh() and nuke()
    // // to gain admin access and run the scripts.
    // for (let i = 0; i < servers1Port.length; ++i) {
    //     const serv = servers1Port[i];

    //     ns.killall(serv)
    //     ns.scp("early-hack-template.js", serv);
    //     ns.brutessh(serv);
    //     ns.nuke(serv);
    //     ns.exec("early-hack-template.js", serv, 12);
    // }
}