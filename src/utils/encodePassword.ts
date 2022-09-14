import * as bcrypt from 'bcrypt';
require('dotenv').config();
const salt = process.env.SALT;

export default async function(rawPassword: string) {
    return bcrypt.hash(rawPassword, salt);
}