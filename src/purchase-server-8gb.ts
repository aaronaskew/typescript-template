import { NS } from "@ns";

export async function main(ns: NS) {
    // How much RAM each purchased server will have. In this case, it'll
    // be 8GB.
    const ram = 8;

    // Iterator we'll use for our loop
    //let i = 5;

    //let numServers = 5

    let numServers = await ns.getPurchasedServers().length;
    let maxServers = await ns.getPurchasedServerLimit();
    let money;
    let cost = await ns.getPurchasedServerCost(ram);

    // Continuously try to purchase servers until we've reached the maximum
    // amount of servers
    while ((numServers) < maxServers) {
        // Check if we have enough money to purchase a server
        money = await ns.getServerMoneyAvailable("home");
        ns.print("cost: "+cost);
        if (money > cost) {
            // If we have enough money, then:
            //  1. Purchase the server
            //  2. Copy our hacking script onto the newly-purchased server
            //  3. Run our hacking script on the newly-purchased server with 3 threads
            //  4. Increment our iterator to indicate that we've bought a new server
            let hostname = await ns.purchaseServer("pserv-" + (numServers), ram);
            await ns.scp("early-hack-template.js", hostname);
            await ns.exec("early-hack-template.js", hostname, 3);
            numServers=await ns.getPurchasedServers().length;
        }
        //Make the script wait for a second before looping again.
        //Removing this line will cause an infinite loop and crash the game.
        await ns.sleep(1000);
    }
}