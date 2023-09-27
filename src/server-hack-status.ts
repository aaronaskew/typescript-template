/** @param {NS} ns */
import { NS } from "@ns";

export async function main(ns: NS) {
    // Defines the "target server", which is the server
    // that we're going to hack. In this case, it's "n00dles"
    const target = String(ns.args[0]);

    while (true) {
        await ns.sleep(1000);


        let money = ns.getServerMoneyAvailable(target);
        let max_money = ns.getServerMaxMoney(target);
        let sec_curr = ns.getServerSecurityLevel(target);
        let sec_min = ns.getServerMinSecurityLevel(target);


        ns.print("===========");
        ns.print("Server: " + target);
        ns.print("Money: " + money)
        ns.print("Max Money: " + max_money);
        ns.print("Security: " + sec_curr);
        ns.print("Security (min): " + sec_min);

    }
}