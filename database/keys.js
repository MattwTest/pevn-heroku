import { Pool } from "pg";

const pool = new Pool({
  host: "ec2-54-90-211-192.compute-1.amazonaws.com",
  port: "5432",
  user: "cbqxjkvpqptjbq",
  password: "c72ffcac54be0135c6376126f34fb2db747783666bee4cee7148190cda3ae440",
  database: "d446f721so3es9",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
