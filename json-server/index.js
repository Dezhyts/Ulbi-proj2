const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

// --- CORS ---
server.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// --- Служебные middlewares ---
server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

// --- Логин ---
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8')
    );
    const { users = [] } = db;

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: e.message });
  }
});

// --- Авторизация для остальных маршрутов ---
server.use((req, res, next) => {
  // Пропускаем preflight
  if (req.method === 'OPTIONS') {
    return next();
  }

  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  return next();
});

// --- Подключаем маршрутизатор ---
server.use(router);

// --- Запуск ---
server.listen(8000, () => {
  console.log('server is running on 8000 port');
});
