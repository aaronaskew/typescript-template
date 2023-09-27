import { NS } from "@ns";

export async function main(ns: NS) {

    let [script, ...script_args] = ns.args;
    //let script_args = ns.args.pop;

    ns.tprint(ns.args);
    ns.tprint(script_args);

    let required_ram = ns.getScriptRam(String(script));
    let hostname = ns.getHostname();
    const available_ram = ns.getServerMaxRam(hostname) - ns.getServerUsedRam(hostname);
    const num_threads = Math.floor(available_ram / required_ram);
    ns.tprint(`threads: ${num_threads}`);

    ns.exec(String(script), hostname, num_threads, ...script_args);
}