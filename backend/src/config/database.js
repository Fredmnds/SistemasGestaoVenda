module.exports = {
  dialect: "mssql",
  dialectOptions: {
    supportBigNumbers: true
  },
  host: "localhost",
  username: "sa",
  password: "123",
  database: "sistemagestao",
  define: {
    timestamps: true,
  },
};
