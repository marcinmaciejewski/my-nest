import * as bcrypt from 'bcrypt';
require('dotenv').config();

export default async function(rawPassword: string, hash: string) {
    return bcrypt.compare(rawPassword, hash);
}