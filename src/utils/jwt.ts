import { sign, verify } from 'jsonwebtoken';
import { User } from '../user/user.entity';
require('dotenv').config();

const secret = process.env.JWT_SECRET
export function generateJWT(payload: User): string {
    return sign(payload, secret);
}

export function verifyJWT(token: string): User {
    const user = verify(token, secret);
    delete user.password;
    return user;
}