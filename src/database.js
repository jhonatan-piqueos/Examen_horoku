import { Pool } from 'pg'

export const pool = new Pool({
    host:'ec2-44-196-223-128.compute-1.amazonaws.com',
    user:'inglusewmebxkzk',
    password:'e169f5ecdcb8c53fac3db0ee322020c322a355ad42a3fe1fe00062177cccb01f',
    database:'dbkv1dr0pdrcau',
    port:5432,
    ssl:{rejectUnauthorized:false}
})