const USERS_STORAGE_KEY = "lobi-users";
const SESSION_STORAGE_KEY = "lobi-session-user";

function clonePayload(value) {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}

function normalizeText(value) {
  return String(value ?? "").trim();
}

function normalizeIdentifier(value) {
  return normalizeText(value).toLowerCase();
}

function readUsersFromStorage() {
  const raw = window.localStorage.getItem(USERS_STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function writeUsersToStorage(users) {
  window.localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

function sanitizeUser(user) {
  if (!user) {
    return null;
  }

  return {
    id: user.id,
    nome: user.nome,
    username: user.username,
    email: user.email,
    role: user.role,
    active: Boolean(user.active),
    createdAt: user.createdAt,
  };
}

function writeSessionUser(user) {
  window.localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user));
}

export function restoreSessionUser() {
  const raw = window.localStorage.getItem(SESSION_STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function clearSessionUser() {
  window.localStorage.removeItem(SESSION_STORAGE_KEY);
}

export async function ensureUsersInitialized() {
  const existing = readUsersFromStorage();
  if (existing && existing.length > 0) {
    return existing;
  }

  const module = await import("@/data/usuarios.json");
  const seedUsers = clonePayload(module.default?.users || []);
  writeUsersToStorage(seedUsers);
  return seedUsers;
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateUsername(value) {
  return /^[a-zA-Z0-9._-]{3,20}$/.test(value);
}

function validatePassword(value) {
  if (value.length < 8) {
    return false;
  }
  const hasLetter = /[A-Za-z]/.test(value);
  const hasNumber = /\d/.test(value);
  return hasLetter && hasNumber;
}

export function registerAccount(payload) {
  const nome = normalizeText(payload?.nome);
  const username = normalizeText(payload?.username);
  const email = normalizeText(payload?.email);
  const password = String(payload?.password ?? "");
  const confirmPassword = String(payload?.confirmPassword ?? "");

  if (!nome || !username || !email || !password || !confirmPassword) {
    return { ok: false, message: "Preencha todos os campos obrigatorios." };
  }

  if (nome.length < 3) {
    return { ok: false, message: "O nome deve ter pelo menos 3 caracteres." };
  }

  if (!validateUsername(username)) {
    return {
      ok: false,
      message: "Usuario invalido. Use 3-20 caracteres com letras, numeros, ponto, _ ou -.",
    };
  }

  if (!validateEmail(email)) {
    return { ok: false, message: "Email invalido." };
  }

  if (!validatePassword(password)) {
    return {
      ok: false,
      message: "A senha deve ter ao menos 8 caracteres, incluindo letras e numeros.",
    };
  }

  if (password !== confirmPassword) {
    return { ok: false, message: "A confirmacao da senha nao confere." };
  }

  const users = readUsersFromStorage() || [];
  const usernameInUse = users.some(
    (item) => normalizeIdentifier(item.username) === normalizeIdentifier(username),
  );
  if (usernameInUse) {
    return { ok: false, message: "Este usuario ja esta em uso." };
  }

  const emailInUse = users.some((item) => normalizeIdentifier(item.email) === normalizeIdentifier(email));
  if (emailInUse) {
    return { ok: false, message: "Este email ja esta cadastrado." };
  }

  const nextId = users.length > 0 ? Math.max(...users.map((item) => Number(item.id) || 0)) + 1 : 1;

  const newUser = {
    id: nextId,
    nome,
    username,
    email,
    password,
    role: "user",
    active: true,
    createdAt: new Date().toISOString(),
  };

  const nextUsers = [...users, newUser];
  writeUsersToStorage(nextUsers);

  const sanitized = sanitizeUser(newUser);
  writeSessionUser(sanitized);

  return {
    ok: true,
    message: "Conta criada com sucesso. Voce ja esta logado.",
    user: sanitized,
  };
}

export function loginAccount(identifier, password) {
  const normalizedIdentifier = normalizeIdentifier(identifier);
  const normalizedPassword = String(password ?? "").trim();

  if (!normalizedIdentifier || !normalizedPassword) {
    return { ok: false, message: "Informe usuario/email e senha." };
  }

  const users = readUsersFromStorage() || [];

  const match = users.find((item) => {
    const usernameMatch = normalizeIdentifier(item.username) === normalizedIdentifier;
    const emailMatch = normalizeIdentifier(item.email) === normalizedIdentifier;
    return (usernameMatch || emailMatch) && String(item.password) === normalizedPassword;
  });

  if (!match) {
    return { ok: false, message: "Usuario/email ou senha invalidos." };
  }

  if (!match.active) {
    return { ok: false, message: "Conta inativa. Contate o administrador." };
  }

  const sanitized = sanitizeUser(match);
  writeSessionUser(sanitized);

  return {
    ok: true,
    message: "Login realizado com sucesso.",
    user: sanitized,
  };
}
