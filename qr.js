/* Copyright (C) 2021 Queen Juliet.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Juliet - Endpanda
*/


const chalk = require('chalk');
const {WAConnection} = require('@Endpanda/queenjuliet-web-api');
const {StringSession} = require('./queenjuliet/');
const fs = require('fs');

async function queenJuliet () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.version = [2, 2126, 14]
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Queen')}${chalk.blue.bold(' Amdi')}
${chalk.white.italic('Queen Juliet Sting session')}

${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please Wait.')}`);
    });
    

	conn.on('open', async () => {
		console.log(
			chalk.green.bold('Queen Juliet QR Code: '),
			'JULIET;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				)
		);
		await conn.sendMessage(
			conn.user.jid,
			'JULIET;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				),
			MessageType.text
		);
		if (conn.user.jid.startsWith('94')) {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ මෙක කටවත් දෙන්න එපා ' + conn.user.name + '* ⚠️',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'* ⚠️',
				MessageType.text
			);
		}
		console.log(
			chalk.green.bold(
				"මෙක copy kකරන්න බැරිනම් whatsapp එකෙn ඇති බම් ode eka awith!\n"
			),
			chalk.green.bold(
				'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

queenjuliet()

