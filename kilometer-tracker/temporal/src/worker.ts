import { NativeConnection, Worker } from '@temporalio/worker';
import * as activities from './activities';

async function run() {
    console.log('Connecting to Temporal server...');

    const connection = await NativeConnection.connect({
        address: 'localhost:7233',
    }).catch((error) => {
        console.error('Failed to connect to Temporal server:', error.message);
        console.log('Make sure Temporal server is running with: temporal server start-dev');
        throw error;
    });

    console.log('Connected to Temporal server successfully!');
    try {
        const worker = await Worker.create({
            connection,
            namespace: 'default',
            taskQueue: 'hello-world',
            workflowsPath: require.resolve('./workflows'),
            activities,
        });
        await worker.run();
    } finally {
        await connection.close();
    }
}

run().catch((err) => {
    console.error(err);
    process.exit(1);
});