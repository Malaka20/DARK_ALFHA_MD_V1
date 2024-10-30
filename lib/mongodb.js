const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: '3.1', value: 'AUTO_READ_STATUS_true' },
    { key: '3.2', value: 'AUTO_READ_STATUS_false' },
    { key: '1.1', value: 'public' },
    { key: '1.2', value: 'Private' },
    { key: '1.3', value: 'Group' },
    { key: '1.4', value: 'Inbox' },
    { key: '2.1', value: 'AUTO_VOICE_true' },
    { key: '2.2', value: 'AUTO_VOICE_false' },
    { key: 'AUTO_STICKER', value: 'false' },
    { key: 'AUTO_REPLY', value: 'false' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
