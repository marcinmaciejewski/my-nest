import { sign } from 'jsonwebtoken';
import { User } from '../user/user.entity';
require('dotenv').config();

const secret = process.env.JWT_SECRET
export default function(payload: User) {
    const token = sign(payload, secret);
    console.log(token);
    return token;
}