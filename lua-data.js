'use strict';

const pageResults = require('graph-results-pager');

// TODO: exchange will need to be replaced with new exchange subgraph once it's finished
const graphAPIEndpoints = {
	blocklytics: 'https://api.luaswap.org/subgraphs/name/phucngh/ethereum-blocks',
	exchange: 'https://api.luaswap.org/subgraphs/name/phucngh/Luaswap'
};

module.exports = {
	pageResults,
	graphAPIEndpoints,
	weth: {
		price() {
			let weth_usdt_pair = "0x347f551eaba062167779c9c336aa681526857b81"
			return pageResults({
				api: graphAPIEndpoints.exchange,
				query: {
					entity: 'pairs',
					selection: {
						where: {
							id: `\\"${weth_usdt_pair}\\"`
						}
					},
					properties: [
						'token0Price'
					]
				}
			})
				.then(([{ token0Price }]) => (Number(token0Price)))
				.catch(err => console.error(err))
		}
	},
	// TODO: can add blockNumber as another parameter to this to get the price for any block

	blocks: {
		latestBlock() {
			return pageResults({
				api: graphAPIEndpoints.blocklytics,
				query: {
					entity: 'blocks',
					selection: {
						first: 1,
						skip: 0,
						orderBy: 'number',
						orderDirection: 'desc',
						where: {
							number_gt: 5100000
						}
					},
					properties: [
						'id',
						'number',
						'timestamp'
					]
				}
			})
				.then(([{ id, number, timestamp }]) =>
				({
					id: id,
					number: Number(number),
					timestamp: Number(timestamp),
					date: new Date(timestamp * 1000)
				})
				)
				.catch(err => console.log(err));
		},

	},
};